import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: 'QDOG - Quantum Powered Blockchain Fun',
  description: 'Where quantum tech meets belly rubs. Join the pack on the QANX Network!',
  icons: {
    icon: '/qdog-7.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="QDOG: The Quantum Pup with a Playful Bite!" />
        <link rel="icon" href="/favicon.png" />
        <title>QDOG - Quantum Pup</title>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}