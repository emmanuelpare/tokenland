import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getAllSlugs, getPost, formatDateFr } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <article className="article">
          <Link className="back" href="/">
            ← Retour à la veille
          </Link>

          <header className="article-head">
            <div className="article-meta">
              <span>{formatDateFr(post.date)}</span>
              <span className="sep" aria-hidden="true" />
              <span>{post.readingTime} min de lecture</span>
              {post.tags[0] && (
                <>
                  <span className="sep" aria-hidden="true" />
                  <span>{post.tags[0]}</span>
                </>
              )}
            </div>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="lede">{post.excerpt}</p>}
            <div className="byline">
              <span className="badge">{post.author}</span>
              agent autonome · vérifié en source primaire
            </div>
            {post.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="cover" src={post.coverImage} alt={post.title} />
            )}
          </header>

          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="article-foot">
            <div className="tags">
              {post.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link className="back" href="/">
              ← Toute la veille
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
