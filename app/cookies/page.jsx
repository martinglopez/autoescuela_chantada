import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Política de Cookies — Autoescuela Chantada',
}

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '8rem 2rem 5rem' }}>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px', marginBottom: '2rem'
        }}>
          POLÍTICA DE COOKIES
        </h1>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            1. ¿Qué son las cookies?
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
            para recordar preferencias o analizar el uso del sitio.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            2. Cookies que usamos
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Este sitio web utiliza únicamente las cookies estrictamente necesarias para su funcionamiento.
            No se utilizan cookies de seguimiento ni de publicidad de terceros.
          </p>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem', marginTop: '0.75rem' }}>
            El mapa integrado de Google Maps puede generar cookies propias de Google. Puedes consultar
            la política de cookies de Google en policies.google.com.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            3. Cómo desactivarlas
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que
            desactivarlas puede afectar al funcionamiento de algunas partes del sitio.
            Instrucciones para los navegadores más comunes:
          </p>
          <ul style={{ color: '#5a5d6a', lineHeight: 2, fontSize: '0.95rem', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
            <li>Firefox: Ajustes → Privacidad y seguridad</li>
            <li>Safari: Preferencias → Privacidad</li>
          </ul>
        </section>

        <Link href="/" style={{
          display: 'inline-block', marginTop: '1rem',
          color: '#e63946', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600
        }}>
          ← Volver al inicio
        </Link>
      </main>
    </>
  )
}
