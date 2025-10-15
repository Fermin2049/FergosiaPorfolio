import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Bentos – Personal Portfolio (Next.js) – Fergocia',
  description: 'Portafolio personal moderno basado en el template Bentos, con Swiper horizontal, TailwindCSS y Framer Motion.',
  keywords: ['portfolio', 'nextjs', 'tailwind', 'swiper', 'framer-motion'],
  authors: [{ name: 'Fermín' }],
  openGraph: {
    title: 'Bentos – Personal Portfolio',
    description: 'Portfolio personal moderno con navegación horizontal por secciones.',
    type: 'website',
    url: 'https://example.com',
    images: [{ url: '/assets/images/og-cover.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bentos – Personal Portfolio',
    description: 'Portfolio personal moderno con navegación horizontal por secciones.',
    images: ['/assets/images/og-cover.png']
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        {/* Remix Icon via CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
