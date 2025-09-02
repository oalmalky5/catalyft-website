import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Catalyft',
  description: 'We build, align, and launch companies in KSA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = 'en' as 'en' | 'ar';

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="antialiased">
        <Nav
          locale={locale}
          logo={
            <Image
              src="/catalyft-logo-main-transparent.png"
              alt="Catalyft"
              width={110}
              height={24}
              priority
            />
          }
          links={[
            { href: '/about', labelEn: 'About', labelAr: 'حول' },
            { href: '/products', labelEn: 'Products', labelAr: 'المنتجات' },
          ]}
          cta={{ href: '/products', labelEn: 'Explore', labelAr: 'استكشف' }}
        />
        {children}
      </body>
    </html>
  );
}
