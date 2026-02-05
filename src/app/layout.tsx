import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videografía Cinematográfica de Bodas',
  description: 'Tu boda filmada como una película. Cobertura profesional en 4K con calidad cinematográfica que perdurará para siempre.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
