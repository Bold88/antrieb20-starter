import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { type, payload } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: !!process.env.SMTP_SECURE, // "true" -> 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `Neue Anfrage (${type ?? "Lead"}) – ${payload?.service ?? "Service"}`;
    const html = `
      <h2>Neue Multi-Step Anfrage</h2>
      <p><strong>Service:</strong> ${payload?.service ?? "-"}</p>
      <p><strong>Plattform:</strong> ${payload?.platform ?? "-"}</p>
      <p><strong>App-Typ:</strong> ${payload?.appType ?? "-"} ${payload?.otherType ? "(" + payload.otherType + ")" : ""}</p>
      <p><strong>Funktionen:</strong> ${(payload?.features ?? []).join(", ") || "-"}</p>
      <p><strong>Budget:</strong> ${payload?.budget ?? "-"}</p>
      <hr/>
      <p><strong>Name:</strong> ${payload?.name ?? "-"}</p>
      <p><strong>E-Mail:</strong> ${payload?.email ?? "-"}</p>
      <p><strong>Telefon:</strong> ${payload?.phone ?? "-"}</p>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}