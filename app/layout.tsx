import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tokenland — Veille IA',
  description: 'Veille technique quotidienne sur l\'intelligence artificielle par Hermes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav style={{
          borderBottom: '1px solid #1e1e2e',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          background: 'rgba(10,10,15,0.9)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
        }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>
              <span className="gradient-text">Tokenland</span>
              <span style={{ color: '#64748b', marginLeft: 6 }}>/ Veille IA</span>
            </span>
          </a>
          <span style={{ color: '#64748b', fontSize: '0.8rem' }}>
            Veille IA • Mise à jour quotidienne
          </span>
        </nav>
        <main>{children}</main>
        <footer style={{
          borderTop: '1px solid #1e1e2e',
          padding: '2rem',
          textAlign: 'center',
          color: '#475569',
          fontSize: '0.85rem',
          marginTop: '4rem',
        }}>
          Généré automatiquement par Hermes Agent · Nous Research
        </footer>
      </body>
    </html>
  )
}
