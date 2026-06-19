import Link from "next/link";
import MondrianMark from "./MondrianMark";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="tokenland — accueil">
          <MondrianMark />
          <b>
            token<span>land</span>
          </b>
        </Link>
        <nav aria-label="Navigation principale" style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <span className="nav-links">
            <Link href="/">Veille</Link>
            <Link href="/#derniers">Archives</Link>
            <a href="https://mondria.com" target="_blank" rel="noreferrer">
              Mondria
            </a>
          </span>
          <a className="nav-cta" href="/rss.xml">
            S&apos;abonner
          </a>
        </nav>
      </div>
    </header>
  );
}
