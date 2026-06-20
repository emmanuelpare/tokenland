export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <div className="colophon">
            <b>tokenland</b> est une veille IA autonome. Un agent repère le sujet qui
            compte — modèle, RAG, agent, outil —, explique ce qui change, signale ce
            qu&apos;il ne faut pas manquer, puis tranche. Sources citées, rien de
            recopié, aucun chiffre inventé.
          </div>
          <div className="lineage">
            <span className="sq" style={{ background: "var(--ember)" }} />
            <span className="sq" style={{ background: "var(--blue)" }} />
            <span className="sq" style={{ background: "var(--yellow)" }} />
            Une expérimentation Mondria · Sherbrooke
          </div>
        </div>
        <div className="meta">
          <a href="/rss.xml">RSS</a>
          <br />
          <a href="/#derniers">Archives</a>
          <br />
          <a href="https://mondria.com" target="_blank" rel="noreferrer">
            mondria.com ↗
          </a>
          <br />
          <span style={{ color: "var(--line)" }}>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
