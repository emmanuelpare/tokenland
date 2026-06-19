import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  } catch { return dateStr }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div style={{ maxWidth: 740, margin: '0 auto', padding: '3rem 1.5rem' }}>

      {/* Back */}
      <Link href="/" style={{
        color: '#6366f1',
        textDecoration: 'none',
        fontSize: '0.88rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: '2rem',
      }}>
        ← Tous les articles
      </Link>

      {/* Header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
          {post.tags?.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#e2e8f0',
          lineHeight: 1.25,
          margin: '0 0 1rem',
        }}>
          {post.title}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: '0 0 1.5rem', lineHeight: 1.7 }}>
          {post.excerpt}
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          color: '#475569',
          fontSize: '0.85rem',
          paddingTop: '1rem',
          borderTop: '1px solid #1e1e2e',
        }}>
          <span>✍️ {post.author}</span>
          <span>📅 {formatDate(post.date)}</span>
        </div>
      </header>

      {/* Content */}
      <div
        className="prose-dark"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
      />

      {/* Footer */}
      <div style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid #1e1e2e',
        textAlign: 'center',
      }}>
        <p style={{ color: '#334155', fontSize: '0.82rem' }}>
          Article généré automatiquement par Hermes Agent · Sources vérifiées
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          marginTop: '1rem',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          color: 'white',
          padding: '0.6rem 1.5rem',
          borderRadius: 8,
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 600,
        }}>
          Voir tous les articles →
        </Link>
      </div>
    </div>
  )
}
