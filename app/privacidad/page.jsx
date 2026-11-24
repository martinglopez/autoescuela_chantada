import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Política de Privacidad — Autoescuela Chantada',
}

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '8rem 2rem 5rem' }}>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px', marginBottom: '2rem'
        }}>
          POLÍTICA DE PRIVACIDAD
        </h1>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            1. Responsable del tratamiento
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
            2. Datos que recogemos
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Este sitio web no dispone de formularios de contacto ni recoge datos personales de forma activa.
            Si contactas con nosotros por teléfono o email, los datos facilitados se tratarán únicamente
            para atender tu consulta.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            3. Finalidad y legitimación
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Los datos se tratan con la única finalidad de gestionar las consultas o la relación contractual
            derivada de la prestación de servicios de formación vial, conforme al Reglamento (UE) 2016/679 (RGPD).
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            4. Derechos del usuario
          </h2>
          <p style={{ color: '#5a5d6a', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad
            y oposición enviando un correo a autoescuelachantada@hotmail.com con copia de tu DNI.
            También tienes derecho a presentar una reclamación ante la Agencia Española de Protección
            de Datos (www.aepd.es).
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
