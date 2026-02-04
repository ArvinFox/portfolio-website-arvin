import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio | Developer & Designer',
  description: 'A passionate developer crafting beautiful digital experiences',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'system' || !theme) {
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (systemDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
