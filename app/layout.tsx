import './css/style.css';

import { Inter } from 'next/font/google';
import StructuredData from '../components/ui/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://allwayshome.ie'),
  title: 'All Ways Home – Trusted House & Pet Sitting in Ireland',
  description:
    'Reliable, caring house and pet sitting service in Ireland. Experienced, professional, and personal care for your home and pets.',
  keywords: [
    'house sitting Ireland',
    'pet sitting Ireland',
    'house sitter',
    'pet sitter',
    'home care Ireland',
    'pet care Ireland',
    'trusted house sitting',
    'professional pet sitting',
    'reliable house sitter',
    'Irish house sitting service',
  ],
  authors: [{ name: 'All Ways Home' }],
  creator: 'All Ways Home',
  publisher: 'All Ways Home',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  openGraph: {
    title: 'All Ways Home – Trusted House & Pet Sitting in Ireland',
    description:
      'Reliable, caring house and pet sitting service in Ireland. Experienced, professional, and personal care for your home and pets.',
    type: 'website',
    locale: 'en_IE',
    url: 'https://allwayshome.ie',
    siteName: 'All Ways Home',
    images: [
      {
        url: '/images/allwayhomehero.png',
        width: 1200,
        height: 630,
        alt: 'All Ways Home - Professional house and pet sitting services in beautiful Irish countryside',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Ways Home – Trusted House & Pet Sitting in Ireland',
    description:
      'Reliable, caring house and pet sitting service in Ireland. Experienced, professional, and personal care for your home and pets.',
    images: ['/images/allwayhomehero.png'],
  },
  alternates: {
    canonical: 'https://allwayshome.ie',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <StructuredData />
        <link
          rel="preload"
          href="/images/allwayshomelogo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <script
          async
          defer
          data-mode="eu"
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </head>
      <body
        className={`${inter.variable} font-inter tracking-tight text-gray-900 antialiased`}
        style={{ backgroundColor: '#f8f5f2' }}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
