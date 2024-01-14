import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template:'%s | Portfolio',
    default: 'Home | Portfolio'
  },
  description: 'Sabrina Fernandez Zambrano portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 p-4`}>
        {children}
      </body>
    </html>
  )
}
