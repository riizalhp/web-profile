import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import Footer from '@/components/Footer';



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
  metadataBase: new URL('https://riizalhp.web.id'),
  title: 'Rizal Hanifa Pratama | Freelance Web Developer & Project Manager Yogyakarta',
  description:
    'Portfolio Rizal Hanifa Pratama, Freelance Web Developer dan Project Manager di Yogyakarta, Indonesia. Mengelola proyek teknologi, membangun website, dan memberikan solusi digital/',
  keywords: [
    'Freelance Web Developer Yogyakarta',
    'Jasa Pembuatan Website Yogyakarta',
    'Jasa Web Developer Indonesia',
    'Project Manager Yogyakarta',
    'Manajer Proyek Teknologi Indonesia',
    'Pengelolaan Proyek Digital',
    'Pembuatan Website Profesional',
    'Solusi Digital Yogyakarta',
    'Jasa Website Murah Yogyakarta',
    'Pengembangan Website Yogyakarta',
    'Pengembangan Aplikasi Web',
    'Layanan Manajemen Proyek',
    'Jasa Product Owner Indonesia',
    'Jasa Agile Scrum Master',
    'Pengelolaan Tim Proyek',
    'Pengelolaan Anggaran Proyek',
    'Konsultan IT Yogyakarta',
    'Layanan Web Developer Freelance',
    'Jasa Pembuatan Sistem Informasi',
    'Website untuk Perusahaan',
    'Pembuatan Website Startup',
    'Jasa Web Design Yogyakarta',
    'Pembuatan Landing Page',
    'Portfolio Web Developer Yogyakarta'
  ],
  authors: [{ name: 'Rizal Hanifa Pratama' }],
  creator: 'Rizal Hanifa Pratama',
  publisher: 'Rizal Hanifa Pratama',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://riizalhp.web.id',
    title: 'Rizal Hanifa Pratama | Freelance Web Developer & Project Manager Yogyakarta',
    description:
      'Portfolio Rizal Hanifa Pratama, Freelance Web Developer dan Project Manager berpengalaman di Yogyakarta, Indonesia. Mengelola proyek teknologi, membangun website, dan memberikan solusi digital yang berdampak.',
    siteName: 'Rizal Hanifa Pratama Portfolio',
    images: [
      {
        url: 'https://s14.gifyu.com/images/bNH4S.webp',
        width: 1200,
        height: 630,
        alt: 'Rizal Hanifa Pratama - Freelance Web Developer & Project Manager Yogyakarta'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizal Hanifa Pratama | Freelance Web Developer & Project Manager Yogyakarta',
    description:
      'Portfolio Rizal Hanifa Pratama, Freelance Web Developer dan Project Manager berpengalaman di Yogyakarta, Indonesia. Mengelola proyek teknologi, membangun website, dan memberikan solusi digital yang berdampak.',
    creator: '@riizalhp',
    images: ['https://s14.gifyu.com/images/bNH4S.webp']
  },
  alternates: {
    canonical: 'https://riizalhp.web.id'
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
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] "></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}