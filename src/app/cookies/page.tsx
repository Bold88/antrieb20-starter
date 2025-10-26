import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookies | Antrieb2.0",
  description: "Informationen zu Cookies auf dieser Webseite.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-16">
        <section className="relative w-full py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Cookie-Richtlinie</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Hier erfahren Sie, wie und warum wir Cookies auf unserer Webseite einsetzen.</p>
            </div>
            <div className="glass-morphism p-8 rounded-2xl border-2 border-primary/10 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Was sind Cookies?</h2>
              <p className="mb-4">Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unsere Webseite nutzerfreundlicher, effektiver und sicherer zu machen.</p>
              <h2 className="text-2xl font-semibold mb-4 mt-8">Welche Cookies verwenden wir?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Essenziell:</b> Notwendige Cookies, die für den Betrieb der Webseite unerlässlich sind.</li>
                <li><b>Statistik:</b> Cookies, die uns helfen, das Nutzerverhalten zu analysieren und unser Angebot zu verbessern.</li>
                <li><b>Marketing:</b> Cookies, die dazu dienen, Ihnen relevante Inhalte und Werbung anzuzeigen.</li>
              </ul>
              <h2 className="text-2xl font-semibold mb-4 mt-8">Cookie-Einstellungen</h2>
              <p>Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser anpassen oder bereits gesetzte Cookies löschen. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-blue-600 underline">Datenschutzerklärung</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
