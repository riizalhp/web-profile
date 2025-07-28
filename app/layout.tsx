import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';



const satoshi = localFont({
  src: '../public/fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Rizal Hanifa Pratama - Expert Project Manager & Tech Leader | Portfolio',
  description: 'Rizal Hanifa Pratama - Experienced Tech Project Manager with strong background in leading cross-functional teams, managing tech projects, and delivering impactful digital solutions. Active in both startup and corporate environments in Yogyakarta, Indonesia.',
  keywords: [
    'Project Manager',
    'Tech Project Manager',
    'Product Owner',
    'Digital Solutions',
    'Cross-functional Teams',
    'Project Planning',
    'Risk Management',
    'Team Leadership',
    'Startup Experience',
    'Corporate Experience',
    'Yogyakarta Project Manager',
    'Indonesia Tech Leader',
    'Rizal Hanifa Pratama',
    'Portfolio',
    'Project Management Services',
    'GitHub Projects',
    'Trello Expert',
    'Notion Expert',
    'Agile Methodology',
    'Scrum Master',
    'Budget Management'
  ],
  authors: [{ name: 'Rizal Hanifa Pratama' }],
  creator: 'Rizal Hanifa Pratama',
  publisher: 'Rizal Hanifa Pratama',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rizalhanifa.com',
    title: 'Rizal Hanifa Pratama - Expert Project Manager & Tech Leader',
    description: 'Experienced Tech Project Manager with strong background in leading cross-functional teams and delivering impactful digital solutions.',
    siteName: 'Rizal Hanifa Pratama Portfolio',
    images: [{
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      width: 1200,
      height: 630,
      alt: 'Rizal Hanifa Pratama - Project Manager Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizal Hanifa Pratama - Expert Project Manager & Tech Leader',
    description: 'Experienced Tech Project Manager with strong background in leading cross-functional teams and delivering impactful digital solutions.',
    creator: '@riizalhp',
    images: ['https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg']
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://rizalhanifa.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
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
              "name": "Rizal Hanifa Pratama",
              "jobTitle": "Project Manager",
              "description": "Experienced Tech Project Manager with strong background in leading cross-functional teams, managing tech projects, and delivering impactful digital solutions.",
              "url": "https://rizalhanifa.com",
              "image": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yogyakarta",
                "addressCountry": "Indonesia"
              },
              "sameAs": [
                "https://www.linkedin.com/in/rizal-hanifa-pratama/",
                "https://wa.me/6289667912404",
                "https://www.instagram.com/riizalhp"
              ],
              "knowsAbout": [
                "Project Management",
                "Team Leadership",
                "Digital Solutions",
                "Cross-functional Teams",
                "Risk Management",
                "Budget Management",
                "Agile Methodology",
                "GitHub Projects",
                "Trello"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "UPN Veteran Yogyakarta"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Contsolution Development",
                  "description": "Project Manager - Full-time"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <div className="relative h-full w-full bg-[#000000]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] "></div>
          {children}
          
        </div>
      </body>
    </html>
  );
}