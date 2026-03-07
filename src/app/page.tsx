"use client";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import Link from "next/link";

const marqueeItems = [
  "Full Planning", "Design Direction", "Destination Weddings",
  "Intimate Ceremonies", "Multicultural Celebrations", "Elopements",
  "Full Planning", "Design Direction", "Destination Weddings",
  "Intimate Ceremonies", "Multicultural Celebrations", "Elopements",
];

const services = [
  {
    number: "01",
    title: "Full Planning & Design",
    description: "From vision to execution — every vendor, every detail, every contingency. We build your wedding from the ground up.",
    features: ["12-month planning timeline", "Vendor curation & management", "Full budget architecture", "On-site coordination team"],
  },
  {
    number: "02",
    title: "Wedding Design Direction",
    description: "Already have a planner? We step in as your creative director — concepting, art directing, and executing the aesthetic.",
    features: ["Full concept development", "Design specifications", "Visual direction deck", "Vendor art direction"],
  },
  {
    number: "03",
    title: "Destination & International",
    description: "Global fluency. Local expertise. We plan seamlessly across continents, cultures, and logistical complexities.",
    features: ["International vendor network", "Multi-timezone coordination", "Cultural ceremony expertise", "Guest travel logistics"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* MARQUEE STRIP */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          background: "var(--white)",
          overflow: "hidden",
          padding: "16px 0",
        }}
      >
        <div className="marquee-track" aria-hidden="true">
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 40,
                paddingInline: 20,
                flexShrink: 0,
              }}
            >
              <span className="eyebrow" style={{ color: "var(--midnight-grey)" }}>
                {item}
              </span>
              <span style={{ color: "var(--vogue-red)", fontSize: 6 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section
        style={{
          padding: "160px clamp(24px,5vw,100px)",
          background: "var(--white)",
        }}
        aria-label="Philosophy"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 100,
              alignItems: "center",
            }}
          >
            <div>
              <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 24 }}>
                01 — The Philosophy
              </p>
              <div
                style={{
                  width: 1,
                  height: 120,
                  background: "var(--black)",
                  opacity: 0.12,
                  marginBottom: 24,
                }}
              />
              <p className="section-number">Est. 2019</p>
            </div>
            <div>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4.5vw, 72px)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "var(--black)",
                  letterSpacing: "-0.01em",
                  marginBottom: 48,
                  borderLeft: "none",
                  padding: 0,
                }}
              >
                &ldquo;We do not plan weddings.
                <br />
                <em style={{ fontStyle: "italic" }}>We craft legacies.&rdquo;</em>
              </blockquote>
              <p
                className="body-lg"
                style={{ color: "var(--midnight-grey)", maxWidth: 560, marginBottom: 40 }}
              >
                Every celebration we design is built on a single conviction: that intentionality
                is the highest form of love. We listen before we concept. We research before
                we design. We question before we execute.
              </p>
              <Link href="/about" className="btn-outline">
                <span>Our Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />

      {/* SERVICES */}
      <section
        style={{
          padding: "120px clamp(24px,5vw,100px)",
          background: "var(--pale)",
        }}
        aria-label="Services"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
              02 — The Bespoke Journey
            </p>
            <h2 className="headline-lg" style={{ color: "var(--black)" }}>
              Choose your path<br />
              <em>to extraordinary.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {services.map((service, i) => (
              <div
                key={service.number}
                style={{
                  background: i === 1 ? "var(--black)" : "var(--white)",
                  padding: "52px 40px",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 80,
                    fontWeight: 300,
                    color: i === 1 ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                    position: "absolute",
                    top: 20,
                    right: 24,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {service.number}
                </p>
                <p
                  className="eyebrow"
                  style={{
                    color: i === 1 ? "var(--vogue-red)" : "var(--light-grey)",
                    marginBottom: 20,
                  }}
                >
                  {service.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.5vw, 36px)",
                    fontWeight: 400,
                    color: i === 1 ? "var(--white)" : "var(--black)",
                    marginBottom: 20,
                    lineHeight: 1.15,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="body-sm"
                  style={{
                    color: i === 1 ? "rgba(255,255,255,0.5)" : "var(--midnight-grey)",
                    marginBottom: 36,
                  }}
                >
                  {service.description}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {service.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        fontWeight: 300,
                        color: i === 1 ? "rgba(255,255,255,0.45)" : "var(--midnight-grey)",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: i === 1 ? "var(--vogue-red)" : "var(--light-grey)",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className={i === 1 ? "btn-primary" : "btn-outline"}
                  style={{
                    marginTop: 40,
                    display: "inline-flex",
                    padding: "12px 28px",
                    fontSize: 10,
                  }}
                >
                  <span>Learn More</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / EXPERIENCE */}
      <Timeline />

      {/* JOURNAL TEASER */}
      <section
        style={{
          padding: "120px clamp(24px,5vw,100px)",
          background: "var(--white)",
        }}
        aria-label="Journal"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 60,
            }}
          >
            <div>
              <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
                06 — Journal
              </p>
              <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                2026 Trend<br />
                <em>Intelligence.</em>
              </h2>
            </div>
            <Link href="/journal" className="btn-outline">
              <span>Read All</span>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 2 }}>
            {[
              {
                cat: "Trend Report",
                title: "Sculptural Food Architecture: When the Menu Becomes the Decor",
                date: "March 2026",
                large: true,
              },
              {
                cat: "Design",
                title: "The Return of Maximalist Floral Installations",
                date: "February 2026",
                large: false,
              },
              {
                cat: "Technology",
                title: "Drone Light Shows: The New Wedding Grand Finale",
                date: "January 2026",
                large: false,
              },
            ].map((article) => (
              <Link
                key={article.title}
                href="/journal"
                style={{
                  textDecoration: "none",
                  background: "var(--pale)",
                  padding: "48px 40px",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--black)";
                  e.currentTarget.querySelectorAll("[data-text]").forEach((el) => {
                    (el as HTMLElement).style.color = "var(--white)";
                  });
                  e.currentTarget.querySelectorAll("[data-sub]").forEach((el) => {
                    (el as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  });
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--pale)";
                  e.currentTarget.querySelectorAll("[data-text]").forEach((el) => {
                    (el as HTMLElement).style.color = "var(--black)";
                  });
                  e.currentTarget.querySelectorAll("[data-sub]").forEach((el) => {
                    (el as HTMLElement).style.color = "var(--light-grey)";
                  });
                }}
              >
                <p
                  data-sub
                  className="eyebrow"
                  style={{
                    color: "var(--light-grey)",
                    marginBottom: 20,
                    transition: "color 0.3s ease",
                  }}
                >
                  {article.cat}
                </p>
                <h3
                  data-text
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: article.large ? "clamp(24px, 2.5vw, 40px)" : "clamp(18px, 1.8vw, 28px)",
                    fontWeight: 400,
                    color: "var(--black)",
                    lineHeight: 1.15,
                    marginBottom: 24,
                    transition: "color 0.3s ease",
                  }}
                >
                  {article.title}
                </h3>
                <p
                  data-sub
                  className="eyebrow"
                  style={{
                    color: "var(--light-grey)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {article.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          background: "var(--black)",
          padding: "160px clamp(24px,5vw,100px)",
          textAlign: "center",
        }}
        aria-label="Call to Action"
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 32 }}>
            Begin Here
          </p>
          <h2
            className="headline-xl"
            style={{ color: "var(--white)", marginBottom: 32 }}
          >
            Your wedding deserves
            <br />
            <em>more than beautiful.</em>
          </h2>
          <p
            className="body-lg"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
              margin: "0 auto 60px",
            }}
          >
            Every great celebration starts with a single conversation.
            Let us begin yours.
          </p>
          <Link href="/inquiry" className="btn-primary" style={{ display: "inline-flex" }}>
            <span>Start Your Inquiry</span>
            <span style={{ fontSize: 18 }}>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
