'use client'
import { useEffect, useRef } from 'react'

const testimonios = [
  {
    texto: 'Aprobé el teórico a la primera después de tres semanas con el campus online. Los instructores son muy pacientes y se adaptan a tu ritmo sin agobios.',
    nombre: 'Laura Fernández',
    detalle: 'Carnet B · Febrero 2026',
    estrellas: 5,
  },
  {
    texto: 'Llevaba tiempo intentándolo en otra autoescuela. Aquí me lo sacaron en cuatro meses. La diferencia es el trato personalizado que te dan desde el primer día.',
    nombre: 'Martín Rodríguez',
    detalle: 'Carnet B · Noviembre 2025',
    estrellas: 5,
  },
  {
    texto: 'Me ayudaron a sacar el A2 en tiempo récord. El circuito de prácticas de moto es muy completo y los instructores conocen perfectamente el recorrido del examen.',
    nombre: 'Pablo Castro',
    detalle: 'Permiso A2 · Enero 2026',
    estrellas: 5,
  },
]

export default function Testimonios() {
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
    <section id="testimonios" className="testimonios" style={{ padding: '7rem 4rem', background: 'var(--surface)' }}>
      <span style={{
        fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--accent)', marginBottom: '1rem', display: 'block'
      }}>
        Lo que dicen nuestros alumnos
      </span>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '2px', marginBottom: '1.25rem'
      }}>
        OPINIONES<br />REALES
      </h2>
      <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '3.5rem' }}>
        Más de 2000 alumnos han pasado por aquí. Estas son algunas de sus experiencias.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {testimonios.map((t, i) => (
          <div
            key={t.nombre}
            ref={el => refs.current[i] = el}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
              opacity: 0, transform: 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              cursor: 'default'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.borderColor = 'rgba(230,57,70,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)';  e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            {/* Comillas decorativas */}
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '4rem', lineHeight: 0.8,
              color: 'rgba(230,57,70,0.15)', userSelect: 'none'
            }}>&quot;</div>

            <p style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
              {t.texto}
            </p>

            {/* Estrellas */}
            <div style={{ display: 'flex', gap: '0.2rem' }}>
              {Array.from({ length: t.estrellas }).map((_, j) => (
                <span key={j} style={{ color: '#e63946', fontSize: '0.85rem' }}>★</span>
              ))}
            </div>

            {/* Autor */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem'
              }}>{t.nombre}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{t.detalle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
