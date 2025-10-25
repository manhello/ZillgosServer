/**
 * Zillgo — Portfolio Website
 * - Green/black neon theme with animated background
 * - Glass-morphism hero section
 * - Background animation ONLY behind Hero + Featured Work
 * - YouTube embeds via youtube-nocookie.com (no autoplay prompts)
 */

const COLORS = {
  neon: "#00FF00",
  darkGreen: "#007A00",
  lime: "#00CC00",
  black: "#000000",
  dark: "#0a0a0a",
};

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={styles.primaryBtn}
      data-testid={`button-${href.replace("#", "")}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div style={styles.page}>
      {/* ----- Scoped background wrapper START (Header + Hero + Featured Work) ----- */}
      <div style={styles.bgScope}>
        <AnimatedBackground />

        {/* Header */}
        <header style={styles.header}>
          <div style={styles.brandLeft}>
            <div style={styles.brandMark} data-testid="brand-logo" />
            <span style={styles.brandName} data-testid="brand-name">
              ZILLGO
            </span>
          </div>

          <nav style={styles.nav}>
            <a
              style={styles.navLink}
              href="#portfolio"
              data-testid="link-portfolio"
            >
              Portfolio
            </a>
            <a style={styles.navLink} href="#about" data-testid="link-about">
              About
            </a>
            <a
              style={styles.navLink}
              href="#contact"
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>

          <PrimaryButton href="#contact">Contact</PrimaryButton>
        </header>

        {/* Hero */}
        <section style={styles.section}>
          <div style={{ ...styles.heroGrid }} className="hero-grid">
            <div style={styles.heroCard}>
              <h1 style={styles.title} data-testid="text-hero-title">
                ZILLGO
                <span style={styles.subtitle} data-testid="text-hero-subtitle">
                  Portfolio
                </span>
              </h1>
              <p style={styles.tagline} data-testid="text-tagline">
                That one shark mask kid.
              </p>

              <div style={styles.ctaRow}>
                <PrimaryButton href="#portfolio">View Portfolio</PrimaryButton>
              </div>
            </div>

            {/* Hero Video (embed) */}
            <ResponsiveYouTube
              title="Can 10 ANIMATORS Make an ANIMATION Without Communicating?"
              id="MT-TRn_92tw"
            />
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" style={styles.section}>
          <h2 style={styles.h2} data-testid="text-portfolio-heading">
            Featured Work
          </h2>
          <div style={styles.grid3} className="portfolio-grid">
            <ResponsiveYouTube
              title="Animating Strangers Avatars on ROBLOX!"
              id="AJcH0A5DL0I"
            />
            <ResponsiveYouTube
              title="ROBLOX: Remix Revolution [Roblox Animation Collab]"
              id="Pp8mRzsoWic"
            />
            <ResponsiveYouTube
              title="This Game Lets You Animate on MOBILE?!"
              id="Dq2Wc7tU-PA"
            />
          </div>
        </section>
      </div>
      {/* ----- Scoped background wrapper END ----- */}

      {/* Contact */}
      <section id="contact" style={styles.sectionOnSolid}>
        <h2 style={styles.h2} data-testid="text-contact-heading">
          Contact
        </h2>
        <div style={styles.cardOnSolid}>
          <div style={styles.contactGrid}>
            <div>
              <h3 style={styles.h3} data-testid="text-business-inquiries">
                Business Inquiries
              </h3>
              <p style={styles.bodyText} data-testid="text-discord">
                @zillgo on Discord
              </p>
            </div>
            <div style={styles.socialRow}>
              <a
                href="https://www.youtube.com/@Zillgo"
                style={styles.ghostBtn}
                data-testid="link-youtube"
              >
                Youtube
              </a>
              <a
                href="https://x.com/Zillgo_Z"
                style={styles.ghostBtn}
                data-testid="link-twitter"
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/JPDXQcg7"
                style={styles.ghostBtn}
                data-testid="link-disord"
              >
                Discord Server
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer} data-testid="text-footer">
        © {new Date().getFullYear()} ZILLGO • All Rights Reserved
      </footer>

      {/* Local styles (keyframes & helpers) */}
      <StyleTag />
    </div>
  );
}

/* ---------- Components ---------- */

function ResponsiveYouTube({ id, title }: { id: string; title: string }) {
  return (
    <div style={styles.videoWrap} data-testid={`video-${id}`}>
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        style={styles.iframe}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div style={styles.bgRoot} aria-hidden>
      <div style={styles.bgGradient} />
      <div style={styles.bgGlow} />
      <div style={styles.marqueeLayer}>
        {Array.from({ length: 7 }).map((_, i) => (
          <MarqueeRow key={i} idx={i} />
        ))}
      </div>
    </div>
  );
}

function MarqueeRow({ idx }: { idx: number }) {
  const speed = 30 + idx * 5;
  const fontSize = 140 - idx * 10;
  const opacity = 0.75 - idx * 0.08;

  return (
    <div
      style={{
        position: "absolute",
        top: `${idx * 13.5}%`,
        left: 0,
        right: 0,
        opacity,
      }}
    >
      <div
        className="zillgo-marquee"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: `zillgoScroll ${speed}s linear infinite`,
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            style={{
              margin: "0 32px",
              fontWeight: 900,
              letterSpacing: "0.1em",
              fontSize: `${fontSize}px`,
              WebkitTextStroke: "2px #00FF00",
              color: "rgba(0,0,0,0.9)",
              textShadow: "0 0 10px rgba(0,255,0,0.15)",
              userSelect: "none",
            }}
          >
            ZILLGO
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Inline Styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    color: "#6ee787",
    background: COLORS.black,
    overflowX: "hidden" as const,
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Helvetica,Arial,sans-serif",
  },

  header: {
    position: "relative" as const,
    zIndex: 10,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "24px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: 16,
  },
  brandLeft: { display: "flex", alignItems: "center", gap: 12 },
  brandMark: {
    width: 36,
    height: 36,
    borderRadius: 12,
    background: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.lime})`,
    boxShadow: "0 0 20px rgba(0,255,0,0.25)",
  },
  brandName: {
    fontWeight: 800,
    letterSpacing: "0.08em",
    color: "#8bff8b",
  },
  nav: { display: "flex", gap: 24, flexWrap: "wrap" as const },
  navLink: { color: "#8bff8b", textDecoration: "none" },

  bgScope: {
    position: "relative" as const,
  },

  bgRoot: {
    position: "absolute" as const,
    inset: 0,
    overflow: "hidden" as const,
    pointerEvents: "none" as const,
  },
  bgGradient: {
    position: "absolute" as const,
    inset: 0,
    background: `linear-gradient(180deg, ${COLORS.black}, ${COLORS.dark})`,
  },
  bgGlow: {
    position: "absolute" as const,
    inset: 0,
    mixBlendMode: "screen" as const,
    opacity: 0.6,
    background:
      "radial-gradient(40% 35% at 30% 35%, rgba(0,255,0,0.2), transparent 70%), radial-gradient(35% 35% at 65% 60%, rgba(0,204,0,0.13), transparent 70%)",
    filter: "blur(30px)",
  },
  marqueeLayer: {
    position: "absolute" as const,
    inset: 0,
    transform: "rotate(-8deg)",
  },

  section: {
    position: "relative" as const,
    zIndex: 10,
    maxWidth: 1200,
    margin: "40px auto 0",
    padding: "0 24px 96px",
  },
  sectionOnSolid: {
    position: "relative" as const,
    zIndex: 10,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px 96px",
    background: COLORS.black,
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 24,
  },
  heroCard: {
    backdropFilter: "blur(14px)",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(0, 255, 0, 0.25)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  title: {
    fontSize: 56,
    fontWeight: 900,
    lineHeight: 1.05,
    color: COLORS.darkGreen,
    margin: 0,
  },
  subtitle: {
    display: "block",
    fontSize: 22,
    fontWeight: 600,
    color: "#4dff4d",
    opacity: 0.9,
    marginTop: 8,
  },
  tagline: {
    marginTop: 16,
    color: "#a9ffb0",
  },
  ctaRow: {
    display: "flex",
    gap: 12,
    marginTop: 24,
    flexWrap: "wrap" as const,
  },

  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 16,
    color: COLORS.black,
    background: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.lime})`,
    boxShadow: "0 6px 18px rgba(0,255,0,0.25)",
    textDecoration: "none",
    transform: "translateZ(0)",
  },
  ghostBtn: {
    display: "inline-block",
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 16,
    color: "#8bff8b",
    textDecoration: "none",
    border: "1px solid rgba(0,255,0,0.4)",
  },

  h2: {
    margin: "0 0 16px",
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: "0.08em",
    color: "#8bff8b",
  },
  h3: {
    margin: "0 0 8px",
    fontSize: 16,
    fontWeight: 700,
    color: "#8bff8b",
  },
  bodyText: { margin: "4px 0 0", color: "#a9ffb0" },

  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
  },

  videoWrap: {
    position: "relative" as const,
    width: "100%",
    paddingTop: "56.25%",
    borderRadius: 24,
    border: "1px solid rgba(0,255,0,0.3)",
    overflow: "hidden" as const,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    background: "rgba(0,0,0,0.7)",
  },
  iframe: {
    position: "absolute" as const,
    inset: 0,
    width: "100%",
    height: "100%",
    border: "0",
  },

  cardOnSolid: {
    border: "1px solid rgba(0,255,0,0.3)",
    borderRadius: 24,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    padding: 24,
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
  },
  socialRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap" as const,
  },

  footer: {
    position: "relative" as const,
    zIndex: 10,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px 56px",
    fontSize: 12,
    color: "#57cc57",
  },
};

function StyleTag() {
  return (
    <style>{`
      @keyframes zillgoScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @media (min-width: 768px) {
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        .portfolio-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `}</style>
  );
}
