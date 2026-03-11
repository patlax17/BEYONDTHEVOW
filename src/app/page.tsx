"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

const marqueeItems = [
  "Bridal Makeup", "Wedding Day Glam", "Trial Sessions",
  "Group Packages", "Editorial Looks", "Airbrush Artistry",
  "Bridal Makeup", "Wedding Day Glam", "Trial Sessions",
  "Group Packages", "Editorial Looks", "Airbrush Artistry",
];

const services = [
  {
    number: "01",
    title: "Full Bridal Package",
    description: "Complete wedding day glam from morning prep to ceremony — including a pre-wedding trial, hair styling coordination, and on-site touch-up kit.",
    features: ["Bridal makeup trial", "Wedding day application", "Touch-up kit included", "On-site artist available"],
  },
  {
    number: "02",
    title: "Bridesmaids & Party",
    description: "Elevate your entire party with a cohesive look that keeps everyone glowing from the aisle to the dance floor.",
    features: ["Group pricing available", "Coordinated aesthetic", "Flexible timing", "Flawless all-day wear"],
  },
  {
    number: "03",
    title: "Airbrush & Editorial",
    description: "Camera-ready, ultra-smooth finish for brides who want their photographs to last as long as their memories.",
    features: ["HD airbrush technique", "Long-wear formula", "Photo-ready finish", "Custom to your skin tone"],
  },
];

const galleryPreview = [
  { src: "/wedding-01.jpg", caption: "Soft Glam" },
  { src: "/wedding-02.jpg", caption: "Classic Bridal" },
  { src: "/wedding-03.jpg", caption: "Bold & Radiant" },
  { src: "/wedding-04.jpg", caption: "Airbrush Finish" },
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

      {/* PHILOSOPHY / INTRO */}
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
              <p className="section-number">Est. 2017</p>
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
                &ldquo;We don't just do makeup.
                <br />
                <em style={{ fontStyle: "italic" }}>We reveal your light.&rdquo;</em>
              </blockquote>
              <p
                className="body-lg"
                style={{ color: "var(--midnight-grey)", maxWidth: 560, marginBottom: 40 }}
              >
                Every bride is unique — her skin, her story, her vision. Our craft begins
                with listening before we ever open a brush. We build looks that feel
                like you on your best day, not a costume.
              </p>
              <Link href="/about" className="btn-outline">
                <span>Our Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section
        style={{
          background: "var(--black)",
          padding: "100px 0 0",
          overflow: "hidden",
        }}
        aria-label="Gallery Preview"
      >
        <div
          style={{
            padding: "0 clamp(24px,5vw,100px) 60px",
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 12 }}>
              02 — The Gallery
            </p>
            <h2 className="headline-lg" style={{ color: "var(--white)" }}>
              Looks we&apos;ve had<br />
              <em>the honour to create.</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "12px 28px",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#fff";
              el.style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(255,255,255,0.4)";
              el.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            View Full Gallery
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
            paddingBottom: 3,
          }}
        >
          {galleryPreview.map((item, i) => (
            <div
              key={i}
              style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.7s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 20px 20px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              >
                <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES / BRIDAL PACKAGES */}
      <section
        style={{
          padding: "120px clamp(24px,5vw,100px)",
          background: "var(--pale)",
        }}
        aria-label="Bridal Makeup Services"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
              03 — Bridal Packages
            </p>
            <h2 className="headline-lg" style={{ color: "var(--black)" }}>
              Choose your path<br />
              <em>to radiance.</em>
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
                  href="/bridal-makeup"
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
            <em>flawless beauty.</em>
          </h2>
          <p
            className="body-lg"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
              margin: "0 auto 60px",
            }}
          >
            Every great look starts with a conversation.
            Let us begin yours.
          </p>
          <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
            <span>Book a Consultation</span>
            <span style={{ fontSize: 18 }}>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
