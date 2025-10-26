import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroMultiStepTrigger from '@/components/HeroMultiStepTrigger';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './hero-rocket.module.css';

export const metadata = {
  title: 'Über uns | Antrieb2.0',
  description: 'Lernen Sie Antrieb2.0 kennen - Ihr Partner für digitale Innovation und Transformation. Erfahren Sie mehr über unsere Mission, Werte und das Team.',
  keywords: [
    'Antrieb2.0',
    'Digitale Transformation',
    'Unternehmenskultur',
    'Innovation',
    'Team',
    'Technologieberatung',
    'Deutschland',
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* Hero Section */}
        <section className="relative w-full pt-20 pb-16 overflow-hidden bg-grid" aria-labelledby="hero-heading">
          {/* Rakete als Hintergrund */}
          <Image
            src="/images/Rakete.png"
            alt="Rakete"
            width={1200}
            height={1200}
            className={styles["bg-rocket"]}
            aria-hidden
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" aria-hidden="true" />
          <div className={"container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " + styles["hero-content-bg"]}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="text-sm font-medium text-primary">Über uns</span>
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Wir gestalten die <span className="text-gradient">digitale Zukunft</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Als Innovationspartner unterstützen wir Unternehmen bei ihrer digitalen Transformation mit zukunftsweisenden Technologien und strategischer Expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#team" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md h-12 px-6" aria-label="Mehr über unser Team erfahren">
                  Team kennenlernen
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 ml-2" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16" role="list" aria-label="Unternehmenskennzahlen">
              <div className="glass-morphism p-6 rounded-xl text-center hover:bg-primary/5 transition-colors" role="listitem">
                <div className="text-3xl font-bold mb-2 text-gradient">100+</div>
                <div className="text-sm text-muted-foreground">Erfolgreiche Projekte</div>
              </div>
              <div className="glass-morphism p-6 rounded-xl text-center hover:bg-primary/5 transition-colors" role="listitem">
                <div className="text-3xl font-bold mb-2 text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </div>
              <div className="glass-morphism p-6 rounded-xl text-center hover:bg-primary/5 transition-colors" role="listitem">
                <div className="text-3xl font-bold mb-2 text-gradient">95%</div>
                <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
              </div>
              <div className="glass-morphism p-6 rounded-xl text-center hover:bg-primary/5 transition-colors" role="listitem">
                <div className="text-3xl font-bold mb-2 text-gradient">10+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </section>
        {/* Werte Section */}
        <section className="py-24 relative overflow-hidden w-full" aria-labelledby="values-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-4 h-4 text-primary" aria-hidden="true">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                <span className="text-sm font-medium text-primary">Unsere Werte</span>
              </div>
              <h2 id="values-heading" className="text-3xl font-bold mb-4">Was uns antreibt</h2>
              <p className="text-muted-foreground text-lg">
                Unsere Werte bilden das Fundament unserer Arbeit und prägen die Art und Weise, wie wir Projekte umsetzen und mit unseren Kunden zusammenarbeiten.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Unsere Kernwerte">
              <div className="glass-morphism p-6 rounded-xl hover:bg-primary/5 transition-colors group" role="listitem">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-blue-500">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Wir treiben digitale Innovation voran und entwickeln zukunftsweisende Lösungen.</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl hover:bg-primary/5 transition-colors group" role="listitem">
                <div className="bg-violet-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-violet-500">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnerschaft</h3>
                <p className="text-muted-foreground">Langfristige Partnerschaften und enge Zusammenarbeit mit unseren Kunden.</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl hover:bg-primary/5 transition-colors group" role="listitem">
                <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-6 h-6 text-emerald-500">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualität</h3>
                <p className="text-muted-foreground">Höchste Qualitätsstandards und Liebe zum Detail in allen Projekten.</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl hover:bg-primary/5 transition-colors group" role="listitem">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-orange-500">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nachhaltigkeit</h3>
                <p className="text-muted-foreground">Nachhaltige Lösungen für eine digitale und umweltbewusste Zukunft.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-24 relative overflow-hidden w-full bg-dot-pattern">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-8 h-8 text-primary" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <span className="text-lg font-bold text-primary">Unsere Mission</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient">Unsere Mission</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Wir glauben an die Kraft der Digitalisierung, um Unternehmen zukunftsfähig zu machen. Unser Ziel ist es, nachhaltige, innovative und maßgeschneiderte Lösungen zu schaffen, die echten Mehrwert bieten.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir begleiten unsere Kunden von der ersten Idee bis zur erfolgreichen Umsetzung und darüber hinaus. Dabei setzen wir auf partnerschaftliche Zusammenarbeit, Transparenz und höchste Qualitätsstandards.
              </p>
              <p className="text-muted-foreground mb-8">
                Unsere Mission ist es, Unternehmen jeder Größe zu befähigen, die Chancen der Digitalisierung optimal zu nutzen – für mehr Effizienz, Wachstum und Zukunftssicherheit.
              </p>
              <div className="flex justify-center gap-8 mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-12 h-12 text-yellow-400 animate-bounce">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-12 h-12 text-rose-500 animate-pulse">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-12 h-12 text-blue-500 animate-spin-slow">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* Ansatz Section */}
        <section className="py-24 relative overflow-hidden w-full">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-primary" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-lg font-bold text-primary">Unser Ansatz</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient">Unser Ansatz</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Wir setzen auf einen ganzheitlichen, agilen Ansatz: Von der Analyse über die Strategie bis zur technischen Umsetzung und dem langfristigen Support begleiten wir unsere Kunden auf jedem Schritt der digitalen Reise.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-10 h-10 text-primary mb-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <div className="font-semibold">Beratung & Strategie</div>
                  <div className="text-muted-foreground text-sm">Individuelle Beratung und Entwicklung einer maßgeschneiderten Digitalstrategie.</div>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-10 h-10 text-yellow-400 mb-2">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                  <div className="font-semibold">Innovation & Entwicklung</div>
                  <div className="text-muted-foreground text-sm">Einsatz modernster Technologien und agiler Methoden für innovative Lösungen.</div>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-10 h-10 text-rose-500 mb-2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <div className="font-semibold">Partnerschaft & Support</div>
                  <div className="text-muted-foreground text-sm">Langfristige Begleitung und Support für nachhaltigen Erfolg.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Geschichte Section */}
        <section className="py-24 relative overflow-hidden w-full">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-primary" aria-hidden="true">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
                <span className="text-lg font-bold text-primary">Unsere Geschichte</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient">Unsere Geschichte</h2>
              <div className="flex flex-col items-center gap-8 mt-8">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-primary">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                      <circle cx="12" cy="8" r="6" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="font-semibold">Gründung</div>
                    <div className="text-muted-foreground text-sm">Antrieb2.0 wurde gegründet, um Unternehmen auf ihrem Weg in die digitale Zukunft zu begleiten. Die ersten Projekte entstanden in enger Zusammenarbeit mit regionalen Partnern.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-green-600">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="font-semibold">Wachstum</div>
                    <div className="text-muted-foreground text-sm">Mit Erfahrung, Leidenschaft und Innovationsgeist setzen wir Projekte jeder Größe erfolgreich um. Heute zählen Unternehmen aus ganz Deutschland zu unseren Kunden.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-6 h-6 text-blue-600 animate-bounce">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="font-semibold">Innovation</div>
                    <div className="text-muted-foreground text-sm">Wir bleiben am Puls der Zeit und entwickeln innovative Lösungen für unsere Kunden. Stetige Weiterbildung und der Einsatz neuester Technologien sind für uns selbstverständlich.</div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-12">Heute ist Antrieb2.0 ein zuverlässiger Partner für Unternehmen, die ihre digitale Zukunft aktiv gestalten wollen. Wir sind stolz auf unsere Geschichte und freuen uns auf viele weitere erfolgreiche Projekte.</p>
            </div>
          </div>
        </section>
        {/* Warum Antrieb2.0 Section */}
        <section className="py-24 relative overflow-hidden w-full bg-primary/5">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-8 h-8 text-primary" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span className="text-lg font-bold text-primary">Warum Antrieb2.0?</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient">Warum Antrieb2.0?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Wir bieten mehr als nur Technik: Wir sind Ihr Partner für nachhaltigen digitalen Erfolg. Das zeichnet uns aus:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-8 h-8 text-primary mt-1">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Individuelle Lösungen</div>
                    <div className="text-muted-foreground text-sm">Jedes Projekt ist einzigartig – wir entwickeln passgenaue Strategien und Software für Ihre Anforderungen.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-8 h-8 text-rose-500 mt-1">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Echte Partnerschaft</div>
                    <div className="text-muted-foreground text-sm">Wir setzen auf offene Kommunikation, Transparenz und langfristige Zusammenarbeit.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-8 h-8 text-yellow-400 mt-1">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Innovationskraft</div>
                    <div className="text-muted-foreground text-sm">Wir bringen frische Ideen und modernste Technologien in jedes Projekt ein.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-primary mt-1">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Erfahrung & Qualität</div>
                    <div className="text-muted-foreground text-sm">Viele Jahre Projekterfahrung und höchste Qualitätsansprüche – für Ihren Erfolg.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden w-full bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="max-w-2xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 text-sm mb-6">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Bereit für die digitale Zukunft?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lassen Sie uns gemeinsam Ihr Projekt starten!</h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Sie haben eine Idee, ein Projekt oder einfach Fragen? Wir freuen uns darauf, 
                Sie kennenzulernen und gemeinsam die beste Lösung für Ihre Herausforderungen zu entwickeln.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <HeroMultiStepTrigger />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Unverbindlich & vertraulich</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Antwort in 24h</span>
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
