import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Metodics',
  description: 'App para calistenia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="gl,es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
