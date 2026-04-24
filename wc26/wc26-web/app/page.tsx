import { getSharedFrontCopy, getSharedFrontTitle } from "@wc26/shared-front";
import { getWorkspaceHighlights, getWorkspaceSubtitle, workspaceTheme } from "@wc26/ui";

export default function Page() {
  const highlights = getWorkspaceHighlights();

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "64px 24px",
        background: `linear-gradient(180deg, ${workspaceTheme.colors.background} 0%, ${workspaceTheme.colors.surface} 100%)`,
        color: workspaceTheme.colors.text
      }}
    >
      <section style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", margin: 0 }}>
          {getSharedFrontTitle()}
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1, margin: "16px 0" }}>
          {getWorkspaceSubtitle("web")}
        </h1>
        <p style={{ fontSize: "1.125rem", maxWidth: 680, lineHeight: 1.6 }}>
          {getSharedFrontCopy()}
        </p>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginTop: 32
          }}
        >
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              style={{
                padding: 20,
                borderRadius: 20,
                background: workspaceTheme.colors.card,
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)"
              }}
            >
              <h2 style={{ marginTop: 0 }}>{highlight.title}</h2>
              <p style={{ marginBottom: 0, lineHeight: 1.6 }}>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
