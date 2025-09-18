// src/app/api/send-mail/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type WizardPayload = {
  // Zusammenfassung aus deinem RequestWizard
  step1?: { need?: string; other?: string | null };
  step2?: { features?: string[] };
  step3?: { styles?: string[]; colors?: string | null };
  budget?: string | null;

  // Kontaktfelder (letzter Schritt)
  name: string;
  email: string;
  phone?: string | null;

  // optional Freitext
  message?: string | null;

  // Sicherheitsfeld gegen Bots (optional)
  honeypot?: string | null;
};

function htmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderHtml(data: WizardPayload) {
  const rows: Array<[string, string]> = [
    ["Was brauchst du?", data.step1?.need || "-"],
    ["Sonstiges", data.step1?.other || "-"],
    ["Funktionen", data.step2?.features?.join(", ") || "-"],
    ["Design-Stil", data.step3?.styles?.join(", ") || "-"],
    ["Farben", data.step3?.colors || "-"],
    ["Budget", data.budget || "-"],
    ["Name", data.name],
    ["E-Mail", data.email],
    ["Telefon", data.phone || "-"],
    ["Nachricht", data.message || "-"],
  ];

  const trs = rows
    .map(
      ([k, v]) =>
        `<tr>
           <td style="padding:8px 12px;border:1px solid #eee;font-weight:600">${htmlEscape(
             k
           )}</td>
           <td style="padding:8px 12px;border:1px solid #eee">${htmlEscape(v)}</td>
         </tr>`
    )
    .join("");

  return `
  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial">
    <h2 style="margin:0 0 12px 0">Neue Projektanfrage</h2>
    <p style="margin:0 0 16px 0;color:#555">Eingegangen über antrieb2punkt0.de</p>
    <table style="border-collapse:collapse;width:100%;max-width:720px">${trs}</table>
  </div>`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as WizardPayload;

    // simpler Bot-Schutz (unsichtbares Feld)
    if (body.honeypot) {
      return NextResponse.json({ ok: true }); // silently ignore
    }

    // Minimalvalidierung
    if (!body?.name || !body?.email) {
      return NextResponse.json(
        { ok: false, error: "name/email required" },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      MAIL_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
      return NextResponse.json(
        { ok: false, error: "SMTP env vars missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `Neue Anfrage – ${body.step1?.need || "Projekt"} – ${body.name}`;
    const html = renderHtml(body);

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject,
      html,
      replyTo: `${body.name} <${body.email}>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("send-mail error:", err);
    return NextResponse.json(
      { ok: false, error: "mail_send_failed" },
      { status: 500 }
    );
  }
}