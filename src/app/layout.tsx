import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Zenos Tech',
  description: 'Implemente o Padrão Zenos e transforme sua operação com agilidade, inovação e clareza.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/zenos_sem_fundo_claro.png',
        href: '/zenos_sem_fundo_claro.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/zenos_sem_fundo_escuro.png',
        href: '/zenos_sem_fundo_escuro.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Teko:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
