import './css/style.css';

import { Inter } from 'next/font/google';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <link
          rel="preload"
          href="/images/allwayshomelogo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
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
