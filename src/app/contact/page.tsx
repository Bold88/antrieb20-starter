import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import HeroMultiStepTrigger from '@/components/HeroMultiStepTrigger';

export const metadata = {
  title: 'Kontakt | Antrieb2.0',
  description: 'Kontaktieren Sie uns für Ihre digitale Transformation. Wir beraten Sie gerne zu unseren maßgeschneiderten Lösungen in den Bereichen Software-Entwicklung, Cloud und KI.',
  keywords: [
    'digital transformation',
    'business solutions',
    'IT consulting',
    'software development',
    'Germany',
    'innovation',
    'technology consulting',
    'digital strategy',
  ],
  authors: [{ name: 'Antrieb2.0' }],
  creator: 'Antrieb2.0',
  publisher: 'Antrieb2.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Antrieb2.0 | Digital Innovation & Business Solutions',
    description: 'Transforming businesses through digital innovation and strategic IT consulting.',
    url: 'https://antrieb2punkt0.de',
    siteName: 'Antrieb2.0',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antrieb2.0 | Digital Innovation & Business Solutions',
    description: 'Transforming businesses through digital innovation and strategic IT consulting.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-16 relative">
        {/* Hero Section */}
        <section className="relative w-full pt-20 pb-16 overflow-hidden" aria-labelledby="contact-heading">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" aria-hidden="true" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="text-sm font-medium text-primary">Kontakt</span>
              </div>
              <h1 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Lassen Sie uns <span className="text-gradient">zusammenarbeiten</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihr Projekt. Wir beraten Sie gerne zu unseren maßgeschneiderten Lösungen.
              </p>
            </div>
          </div>
        </section>
        {/* Kontaktformular & Infos */}
        <section className="py-24 relative w-full overflow-hidden" aria-labelledby="form-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex flex-col items-center justify-center">
                  <h2 id="form-heading" className="text-2xl font-bold mb-8">Wunsch äußern</h2>
                  <HeroMultiStepTrigger />
                </div>
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-8">Kontaktinformationen – Antrieb 2.0 UG</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-primary mt-1" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <div>
                        <h3 className="font-medium mb-1">E-Mail</h3>
                        <a href="mailto:willkommen@antrieb2punkt0.de" className="text-muted-foreground hover:text-primary transition-colors">willkommen@antrieb2punkt0.de</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-primary mt-1" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-primary mt-1" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <h3 className="font-medium mb-1">Standort</h3>
                        <address className="text-muted-foreground not-italic">
                          Hauptstraße 136<br />
                          33647 Bielefeld<br />
                          Nordrhein-Westfalen<br />
                          Deutschland
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-8">Öffnungszeiten</h2>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Montag – Freitag: 10:00 – 18:00 Uhr</p>
                    <p className="text-muted-foreground">Samstag – Sonntag: Geschlossen</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-8">Geschäftsführung / Vertreten durch</h2>
                  <div className="space-y-2 flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-6 h-6 text-primary" aria-hidden="true">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <div>
                      <p className="font-medium">Bold Molor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
