import './globals.css'

export const metadata = {
  title: 'Autoescuela Chantada — Conduce tu futuro',
  description: 'Autoescuela en Chantada, Lugo. Carnet B, A1, A2 y más.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "22549f170a914c2ca0c8521008411f24"}'></script>
      </body>
    </html>
  )
}