'use client'
import { useEffect, useRef } from 'react'

const servicios = [
  { icon: '🚗', title: 'Carnet B — Coche', desc: 'El permiso más completo. Clases teóricas y prácticas con vehículos modernos y doble mando. Horarios flexibles.' },
  { icon: '🏍️', title: 'Permisos A1 / A2', desc: 'Licencia para motocicletas de hasta 35 kW o categoría A2. Circuito de prácticas en el mismo lugar del examen para mayor seguridad.' },
  { icon: '💻', title: 'Test Online 24/7', desc: 'Campus virtual con miles de preguntas actualizadas. Practica desde el móvil, la tablet o el ordenador cuando quieras.' },
  { icon: '🔄', title: 'Clases de Reciclaje', desc: 'Llevas tiempo sin conducir o quieres reforzar hábitos. Sesiones personalizadas con instructores pacientes.' },
]

export default function Servicios() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        } else {
          e.target.style.opacity = '0'
          e.target.style.transform = 'translateY(20px)'
        }
      }),
      { threshold: 0.1 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="servicios" style={{ padding: '7rem 4rem', background: 'var(--surface)' }}>
      <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem', display: 'block' }}>
        Lo que ofrecemos
      </span>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '2px', marginBottom: '1.25rem' }}>
        NUESTROS<br />SERVICIOS
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '3.5rem' }}>
        Todo lo que necesitas para sacarte el carnet sin complicaciones y en el menor tiempo posible.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5px', background: 'var(--border)',
        border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden'
      }}>
        {servicios.map((s, i) => (
          <div
            key={s.title}
            ref={el => refs.current[i] = el}
            style={{
              background: 'var(--surface)', padding: '2.5rem',
              opacity: 0, transform: 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
          >
            <div style={{
              width: 52, height: 52, background: 'rgba(230,57,70,0.08)',
              border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem', fontSize: '1.4rem'
            }}>{s.icon}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{s.title}</div>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
