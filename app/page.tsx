import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Proceso from '@/components/Proceso'
import Testimonios from '@/components/Testimonios'
import CTA from '@/components/CTA'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Proceso />
      <Testimonios />
      <CTA />
      <Contacto />
    </main>
  )
}