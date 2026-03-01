import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nova — Relational Intelligence',
  description: 'Relational Intelligence. Not predictive guessing. Nova is built on the Unified Dynamics Framework (UDF).',
  openGraph: {
    title: 'Nova — Relational Intelligence',
    description: 'Relational Intelligence. Not predictive guessing. Nova is built on the Unified Dynamics Framework (UDF).',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}