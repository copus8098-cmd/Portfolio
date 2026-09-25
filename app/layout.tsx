// app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'My Portfolio',
  description: 'Photography & Visual Analysis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}