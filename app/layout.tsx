import './css/style.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
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
        url: '/images/allwayshomelogo.png',
        width: 1200,
        height: 630,
        alt: 'All Ways Home - Trusted House & Pet Sitting in Ireland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Ways Home – Trusted House & Pet Sitting in Ireland',
    description:
      'Reliable, caring house and pet sitting service in Ireland. Experienced, professional, and personal care for your home and pets.',
    images: ['/images/allwayshomelogo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
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
