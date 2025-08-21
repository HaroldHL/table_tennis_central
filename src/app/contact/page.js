import Contact from '@/components/Contact'

export const metadata = {
  title: 'Contact Us - Table Tennis Central',
  description: 'Get in touch with Table Tennis Central. Book your table, inquire about coaching, or ask any questions. We\'re here to help with your table tennis needs.',
  keywords: 'contact table tennis central, book table tennis, ping pong booking, table tennis inquiry',
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  )
}