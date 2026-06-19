import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  content: string
  contentHtml?: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug: filename.replace('.md', ''),
        title: data.title || 'Sans titre',
        date: data.date || '',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        author: data.author || 'Hermes AI',
        content,
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return {
    slug,
    title: data.title || 'Sans titre',
    date: data.date || '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    author: data.author || 'Hermes AI',
    content,
    contentHtml: processed.toString(),
  }
}
