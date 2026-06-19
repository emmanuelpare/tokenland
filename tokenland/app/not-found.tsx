import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <section className="hero">
          <div className="eyebrow">Erreur 404</div>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: "clamp(2.4rem,5vw,3.6rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Cette page n&apos;existe pas.
          </h1>
          <p style={{ color: "var(--mist)", marginTop: 18, maxWidth: "46ch" }}>
            Le lien est peut-être périmé, ou l&apos;article a changé d&apos;adresse.
          </p>
          <Link className="back" href="/" style={{ marginTop: 28, display: "inline-flex" }}>
            ← Retour à la veille
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
