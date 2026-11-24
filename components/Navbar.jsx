'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav-inner" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '0.5rem 4rem' : '0.6rem 4rem',
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,0,0,0.09)',
      transition: 'padding 0.3s ease'
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img
          src="/logo.png"
          alt="Autoescuela Chantada"
          style={{ height: scrolled ? 44 : 90, width: 'auto', transition: 'height 0.3s ease' }}
        />
        {!scrolled && (
          <div className="nav-badge" style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.25)',
            color: '#e63946', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '0.35rem 0.9rem', borderRadius: '100px'
          }}>
            <span style={{ width: 6, height: 6, background: '#e63946', borderRadius: '50%', display: 'inline-block' }}></span>
            Autoescuela en Chantada, Lugo
          </div>
        )}
      </div>

      <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['Servicios', 'Proceso', 'Contacto'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              color: '#7a7d8a', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '0.05em'
            }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="tel:982462300"
        style={{
          background: '#e63946', color: '#fff',
          padding: '0.55rem 1.4rem', borderRadius: '100px',
          fontSize: '0.85rem', fontWeight: 600,
          textDecoration: 'none', transition: 'background 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#c1121f'}
        onMouseLeave={e => e.currentTarget.style.background = '#e63946'}
      >
        Llámanos
      </a>
    </nav>
  )
}
