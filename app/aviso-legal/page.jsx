import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Aviso Legal — Autoescuela Chantada',
}

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '8rem 2rem 5rem' }}>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px', marginBottom: '2rem'
        }}>
          AVISO LEGAL
        </h1>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            1. Titular del sitio web
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <strong>Titular:</strong> Andrés González Ledo<br />
            <strong>Domicilio profesional:</strong> Xoán XXIII, 15 Entl., 27500 Chantada (Lugo)<br />
            <strong>Teléfono:</strong> 982 462 300<br />
            <strong>Email:</strong> autoescuelachantada@hotmail.com
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            2. Condiciones de uso
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            El acceso y uso de este sitio web implica la aceptación plena de las presentes condiciones.
            El titular se reserva el derecho a modificar sin previo aviso el contenido del sitio web.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            3. Propiedad intelectual
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Todos los contenidos de este sitio web (textos, imágenes, diseño) son propiedad del titular
            o de terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización expresa.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            4. Legislación aplicable
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Este aviso legal se rige por la legislación española vigente.
            Para cualquier controversia, las partes se someten a los juzgados y tribunales de Lugo.
          </p>
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
