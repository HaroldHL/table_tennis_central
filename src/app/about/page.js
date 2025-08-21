import About from '@/components/About'

export const metadata = {
  title: 'About Us - Table Tennis Central',
  description: 'Learn about Table Tennis Central, Australia\'s premier dedicated table tennis venue. Our vision, facilities, and commitment to making table tennis accessible to everyone.',
  keywords: 'about table tennis central, table tennis venue Australia, ping pong facility, table tennis club',
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
    </main>
  )
}