// app/layout.tsx
import type { Metadata } from 'next';
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
        {/* Mount once so any “Contact Us” trigger can open it */}
        <ContactDialog />
      </body>
    </html>
  );
}
