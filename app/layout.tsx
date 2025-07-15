import './css/style.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'All Ways Home - House & Pet Sitting Services Ireland',
  description:
    'Professional house and pet sitting services across Ireland. Reliable, trustworthy, and caring for your home and beloved pets.',
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
