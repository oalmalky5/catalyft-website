// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import ContactDialog from '@/components/ContactDialog'; // ⬅️ mount the site-wide modal

export const metadata: Metadata = {
  title: 'CataLyft',
  description:
    'Lift, Align, Launch — market entry and operations for Saudi Arabia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Nav />
        {children}
        <Script id="leadfeeder-tracker" strategy="afterInteractive">
          {`
            (function(ss,ex){
              window.ldfdr=window.ldfdr||function(){
                (ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));
              };
              (function(d,s){
                var fs=d.getElementsByTagName(s)[0];
                function ce(src){
                  var cs=d.createElement(s);
                  cs.src=src;
                  cs.async=1;
                  fs.parentNode.insertBefore(cs,fs);
                }
                ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
              })(document,'script');
            })('3P1w24d5zpoaMY5n');
          `}
        </Script>
        {/* Mount once so any “Contact Us” trigger can open it */}
        <ContactDialog />
      </body>
    </html>
  );
}
