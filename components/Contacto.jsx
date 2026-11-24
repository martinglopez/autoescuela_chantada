const info = [
  { icon: '📞', val: '982 462 300' },
  { icon: '✉️', val: 'autoescuelachantada@hotmail.com' },
  { icon: '🕐', val: 'Lun–Vie: 10:00–14:00 y 16:00–20:00' },
]

export default function Contacto() {
  return (
    <footer id="contacto" className="footer-row" style={{
      padding: '0.6rem 4rem 1.25rem',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1.5rem'
    }}>

      <img src="/logo.png" alt="Autoescuela Chantada" style={{ height: 100, width: 'auto' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {info.map(item => (
          <div key={item.val} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
            <span>{item.icon}</span>
            <span>{item.val}</span>
          </div>
        ))}
      </div>

      <div className="footer-legal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
        <div className="footer-legal-links" style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'Aviso legal', href: '/aviso-legal' },
            { label: 'Privacidad',  href: '/privacidad' },
            { label: 'Cookies',     href: '/cookies' },
          ].map(l => (
            <a key={l.label} href={l.href} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem' }}>{l.label}</a>
          ))}
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>© 2026 Autoescuela Chantada</div>
      </div>

    </footer>
  )
}
