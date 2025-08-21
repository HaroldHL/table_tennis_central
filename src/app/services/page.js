import Services from '@/components/Services'

export const metadata = {
  title: 'Services - Table Tennis Central',
  description: 'Discover our comprehensive table tennis services: professional table rental, expert coaching, tournaments, and events. Everything you need for the perfect table tennis experience.',
  keywords: 'table tennis services, table rental, ping pong coaching, table tennis lessons, tournaments',
}

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <Services />
    </main>
  )
}