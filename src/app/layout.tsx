import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cotización Boda - Oasis Creativa | Videografía Cinematográfica',
  description: 'Propuesta de cobertura cinematográfica para tu boda. 2 días de filmación con calidad de película.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
