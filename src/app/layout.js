import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Table Tennis Central - Premier Table Tennis Club',
  description: 'Play table tennis anytime! Australia\'s premier dedicated table tennis venue with professional tables, coaching, and online booking system.',
  keywords: 'table tennis, ping pong, coaching, lessons, tournaments, Australia, booking, professional tables',
  authors: [{ name: 'Table Tennis Central' }],
  creator: 'Table Tennis Central',
  publisher: 'Table Tennis Central',
  openGraph: {
    title: 'Table Tennis Central - Play Anytime',
    description: 'Professional table tennis venue with online booking, expert coaching, and state-of-the-art facilities.',
    url: 'https://table-tennis-central.netlify.app',
    siteName: 'Table Tennis Central',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Table Tennis Central Facility',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Table Tennis Central - Play Anytime',
    description: 'Professional table tennis venue with online booking and expert coaching.',
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}