import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fatiha Eros Perdana - Expert Product Designer & UI/UX Specialist | Portfolio',
  description: 'Fatiha Eros Perdana - Professional Product Designer specializing in UI/UX design, visual design, SEO optimization, and web development. 4+ years experience crafting user-centric designs with pixel-perfect precision. Available for freelance projects in Yogyakarta, Indonesia.',
  keywords: [
    'Product Designer',
    'UI/UX Designer',
    'Visual Designer',
    'Web Developer',
    'SEO Specialist',
    'User Experience Design',
    'Interface Design',
    'Freelance Designer',
    'Yogyakarta Designer',
    'Indonesia Designer',
    'Fatiha Eros Perdana',
    'Portfolio',
    'Design Services',
    'Figma Expert',
    'Framer Designer',
    'Information Architecture',
    'Story Boarding',
    'Illustration',
    'No Code Development'
  ],
  authors: [{ name: 'Fatiha Eros Perdana' }],
  creator: 'Fatiha Eros Perdana',
  publisher: 'Fatiha Eros Perdana',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fatihaeros.com',
    title: 'Fatiha Eros Perdana - Expert Product Designer & UI/UX Specialist',
    description: 'Professional Product Designer with 4+ years experience in UI/UX design, visual design, and web development. Crafting user-centric designs with pixel-perfect precision.',
    siteName: 'Fatiha Eros Perdana Portfolio',
    images: [{
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5kIlEjYNcAfgYtwCkKW_vNGe8wISmf26pKJGchx2m7SyvGDHafZqHB74xb87h0LZNQK8dpSv7bCVhG1K89zYgOpow3Um1M0xEhwts89UEB0FCSs5dl9zGYO6EXDZSZgQUYYExJG_wP92Qv5BN6-3papfSw4yY70BbKJL_b5P3C8sA32fjqzicp5983SbAn6Gc0SErmxYOFN3s-DRrape9f0lVazch8hpU12bEHKGtnRjOqHMPWpVPvuP_qCExfisMD1ALkIEibPke',
      width: 1200,
      height: 630,
      alt: 'Fatiha Eros Perdana - Product Designer Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatiha Eros Perdana - Expert Product Designer & UI/UX Specialist',
    description: 'Professional Product Designer with 4+ years experience in UI/UX design, visual design, and web development.',
    creator: '@fatihaeros',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC5kIlEjYNcAfgYtwCkKW_vNGe8wISmf26pKJGchx2m7SyvGDHafZqHB74xb87h0LZNQK8dpSv7bCVhG1K89zYgOpow3Um1M0xEhwts89UEB0FCSs5dl9zGYO6EXDZSZgQUYYExJG_wP92Qv5BN6-3papfSw4yY70BbKJL_b5P3C8sA32fjqzicp5983SbAn6Gc0SErmxYOFN3s-DRrape9f0lVazch8hpU12bEHKGtnRjOqHMPWpVPvuP_qCExfisMD1ALkIEibPke']
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://fatihaeros.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="geo.region" content="ID-YO" />
        <meta name="geo.placename" content="Yogyakarta" />
        <meta name="geo.position" content="-7.797068;110.370529" />
        <meta name="ICBM" content="-7.797068, 110.370529" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fatiha Eros Perdana",
              "jobTitle": "Product Designer",
              "description": "Professional Product Designer specializing in UI/UX design, visual design, SEO optimization, and web development with 4+ years of experience.",
              "url": "https://fatihaeros.com",
              "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC5kIlEjYNcAfgYtwCkKW_vNGe8wISmf26pKJGchx2m7SyvGDHafZqHB74xb87h0LZNQK8dpSv7bCVhG1K89zYgOpow3Um1M0xEhwts89UEB0FCSs5dl9zGYO6EXDZSZgQUYYExJG_wP92Qv5BN6-3papfSw4yY70BbKJL_b5P3C8sA32fjqzicp5983SbAn6Gc0SErmxYOFN3s-DRrape9f0lVazch8hpU12bEHKGtnRjOqHMPWpVPvuP_qCExfisMD1ALkIEibPke",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yogyakarta",
                "addressCountry": "Indonesia"
              },
              "sameAs": [
                "https://linkedin.com/in/fatihaeros",
                "https://twitter.com/fatihaeros",
                "https://instagram.com/fatihaeros"
              ],
              "knowsAbout": [
                "UI/UX Design",
                "Product Design",
                "Visual Design",
                "Web Development",
                "SEO Optimization",
                "Information Architecture",
                "Story Boarding",
                "Figma",
                "Framer"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Design Education"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Sabila Transport",
                  "description": "Product Designer - Full-time"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}