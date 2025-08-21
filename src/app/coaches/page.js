import Coaches from '@/components/Coaches'

export const metadata = {
  title: 'Expert Coaches - Table Tennis Central',
  description: 'Meet our professional table tennis coaches. Learn from experienced players with proven track records in coaching and competitive play.',
  keywords: 'table tennis coaches, ping pong lessons, professional coaching, table tennis training',
}

export default function CoachesPage() {
  return (
    <main className="pt-16">
      <Coaches />
    </main>
  )
}