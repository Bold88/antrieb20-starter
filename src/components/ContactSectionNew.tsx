import HeroMultiStepTrigger from '@/components/HeroMultiStepTrigger';

export default function ContactSectionNew() {
  return (
    <section className="py-24 relative w-full overflow-hidden bg-transparent" aria-labelledby="form-heading">
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
  );
}
