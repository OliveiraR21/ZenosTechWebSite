import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Inter, Teko } from 'next/font/google';
import { NikoChat } from '@/components/niko-chat';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const teko = Teko({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-teko' });

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
      </head>
      <body className={`${inter.variable} ${teko.variable} font-body antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <Toaster />
          <NikoChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
