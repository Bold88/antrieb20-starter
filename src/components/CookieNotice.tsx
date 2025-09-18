"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accepted = window.localStorage.getItem("cookie-accepted");
      if (!accepted) setVisible(true);
    }
  }, []);

  function accept() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cookie-accepted", "1");
      setVisible(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white border border-zinc-200 shadow-lg rounded-xl px-6 py-4 max-w-xl w-full flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 text-sm text-zinc-800">
          <b>Cookies auf Antrieb 2.0</b><br />
          Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="text-blue-600 underline">Datenschutzerklärung</Link>.
        </div>
        <button
          className="mt-2 md:mt-0 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          onClick={accept}
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
