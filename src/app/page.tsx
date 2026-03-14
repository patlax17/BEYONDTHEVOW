"use client";

import Hero from "@/components/Hero";
import Link from "next/link";

const marqueeItems = [
  "Luxury Wedding Coordination", "Bridal Beauty Support", "Content Creation",
  "Day-Of Coordination", "Full Planning & Design", "Stress-Free Brides",
  "Luxury Wedding Coordination", "Bridal Beauty Support", "Content Creation",
  "Day-Of Coordination", "Full Planning & Design", "Stress-Free Brides",
];

const whyUs = [
  {
    icon: "💄",
    title: "Built-in Beauty Support",
    body: "Your coordinator is professional bridal makeup artist. Whether or not you book us for makeup, we are always on hand to manage lashes, touch up your look, and ensure you remain camera-ready throughout the day. This level of on-site beauty support is a standard we set, ensuring you never have to worry about the details.",
    link: { label: "See Our Makeup Work", href: "/bridal-makeup" },
  },
  {
    icon: "🎨",
    title: "Design + Decor Expertise",
    body: "We do more than oversee setups. With deep experience in event design, we ensure every floral arrangement and layout is intentional and aligned with your vision. If a detail is out of place, we correct it personally to maintain the integrity of your design.",
  },
  {
    icon: "👑",
    title: "A Dedicated Production Team",
    body: "We eliminate the need for running back and forth. Our full team manages vendors, maintains the timeline, and ensures your guests are effortlessly guided. We resolve challenges quietly, so nothing is ever overlooked.",
  },
  {
    icon: "📱",
    title: "Wedding Day Content Creation",
    body: "While everyone else waits weeks for professional photos, you'll have real-time, behind-the-scenes memories instantly. We capture getting ready moments, emotional first looks, bridal party fun, candid laughs, detail shots, TikToks/Reels, and aesthetic iPhone footage — perfect for sharing the same day.",
  },
  {
    icon: "🤍",
    title: "Your Peace of Mind",
    body: "You should never have to manage vendors or solve logistical problems on your wedding day. We handle every detail behind the scenes, allowing you to stay present and enjoy every moment with total confidence.",
  },
  {
    icon: "✨",
    title: "Luxury-Level Experience",
    body: "We specialize in high-end celebrations and destination events. We bring calm, professional energy and white-glove service to every wedding we produce, regardless of complexity or scale.",
  },
];

const galleryPreview = [
  { src: "/portfolio-01.jpg", caption: "Cultural Wedding" },
  { src: "/portfolio-02.jpg", caption: "Garden Romance" },
  { src: "/portfolio-03.jpg", caption: "Bridal Beauty" },
  { src: "/portfolio-04.jpg", caption: "Bridal Party" },
];

const promiseItems = [
  "Clear communication",
  "Flawless organization",
  "Calm energy",
  "Attention to every tiny detail",
  "A wedding day that feels effortless",
];

const servicesList = [
  { name: "Day-of Coordination", href: "/services" },
  { name: "Month-of Coordination", href: "/services" },
  { name: "Full Planning + Design", href: "/services" },
  { name: "Bridal Makeup Services", href: "/bridal-makeup" },
  { name: "Content Creation Add-On", href: "/services" },
  { name: "Destination Weddings", href: "/services" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <Hero />

      {/* ── MARQUEE STRIP ── */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          background: "var(--white)",
          overflow: "hidden",
          padding: "18px 0",
        }}
      >
        <div className="marquee-track" aria-hidden="true">
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 40, paddingInline: 20, flexShrink: 0 }}
            >
              <span className="eyebrow" style={{ color: "var(--midnight-grey)" }}>{item}</span>
              <span style={{ color: "var(--vogue-red)", fontSize: 6 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT / INTRO ── */}
      <section
        style={{ padding: "140px clamp(24px,5vw,100px)", background: "var(--white)" }}
        aria-label="About Beyond the Vow"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 100, alignItems: "center" }}
            className="btv-about-grid"
          >
            <div>
              <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 24, letterSpacing: "0.25em" }}>
                01 / About Us
              </p>
              <div style={{ width: 1, height: 100, background: "var(--black)", opacity: 0.1, marginBottom: 24 }} />
              <p className="section-number" style={{ color: "var(--light-grey)" }}>Est. 2017</p>
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4vw, 60px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--black)",
                  marginBottom: 40,
                }}
              >
                Not Just Coordinators.<br />
                <em>Your Bridal Dream Team.</em>
              </h2>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                Beyond the Vow was founded from a realization that modern brides deserve more than traditional coordination.
              </p>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                They deserve <em>a team.</em>
              </p>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                A team that understands timelines, beauty, details, decor, energy, and the emotions of the day.
              </p>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                Founded by a professional bridal makeup artist with over 10 years of experience in weddings, television production, and celebrity glam, and partnered with an expert in event planning and design, we bring a rare combination of artistry, organization, and luxury service that most coordinators simply cannot offer.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2.5vw, 36px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--black)",
                  marginBottom: 24,
                  lineHeight: 1.3,
                }}
              >
                We elevate every wedding we manage.
              </p>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                When you partner with Beyond the Vow, you are gaining a dedicated production team focused on protecting your peace and perfecting every design detail.
              </p>
              <Link href="/about" className="btn-outline">
                <span>Meet the Team</span>
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .btv-about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        style={{ background: "var(--black)", padding: "120px clamp(24px,5vw,100px)" }}
        aria-label="Why Choose Beyond the Vow"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ marginBottom: 80, textAlign: "center" }}>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              02 / Our Difference
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 80px)",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              Why Couples Choose<br />
              <em>Beyond the Vow</em>
            </h2>
          </div>

          <div className="btv-why-grid">
            {whyUs.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "48px 40px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: i === 3 ? "rgba(201,169,110,0.06)" : "transparent",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = i === 3 ? "rgba(201,169,110,0.06)" : "transparent";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 20, lineHeight: 1 }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 2vw, 28px)",
                    fontWeight: 400,
                    color: "var(--white)",
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p className="body-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                  {item.body}
                </p>
                {"link" in item && item.link && (
                  <Link
                    href={(item.link as { label: string; href: string }).href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(201,169,110,0.85)",
                      textDecoration: "none",
                      marginTop: 20,
                      borderBottom: "1px solid rgba(201,169,110,0.3)",
                      paddingBottom: 4,
                      transition: "color 0.25s ease, border-color 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#fff";
                      el.style.borderColor = "rgba(255,255,255,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "rgba(201,169,110,0.85)";
                      el.style.borderColor = "rgba(201,169,110,0.3)";
                    }}
                  >
                    {(item.link as { label: string; href: string }).label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .btv-why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
          }
          @media (max-width: 900px) {
            .btv-why-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 601px) and (max-width: 900px) {
            .btv-why-grid { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section
        style={{ background: "var(--pale)", padding: "120px 0 0", overflowX: "hidden" }}
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
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>03 / Portfolio</p>
            <h2 className="headline-lg" style={{ color: "var(--black)" }}>
              A glimpse into<br />
              <em>the magic we create.</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            style={{
              fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--midnight-grey)", textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.2)", padding: "12px 28px", transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--black)"; el.style.color = "#fff"; el.style.borderColor = "var(--black)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent"; el.style.color = "var(--midnight-grey)"; el.style.borderColor = "rgba(0,0,0,0.2)";
            }}
          >
            View Full Gallery
          </Link>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, paddingBottom: 3 }}
          className="btv-gallery-grid"
        >
          {galleryPreview.map((item, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 20px 20px", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
                <p className="eyebrow" style={{ color: "rgba(255,255,255,0.8)" }}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .btv-gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── OUR PROMISE ── */}
      <section
        style={{ padding: "140px clamp(24px,5vw,100px)", background: "var(--white)" }}
        aria-label="Our Promise"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}
            className="btv-promise-grid"
          >
            <div>
              <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 20 }}>04 / Our Promise</p>
              <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 40 }}>
                Our Promise<br /><em>To You.</em>
              </h2>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 40 }}>
                From the moment you book us, you gain more than coordination; you gain complete peace of mind.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
                {promiseItems.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--vogue-red)", flexShrink: 0, display: "inline-block" }} />
                    <span className="body-lg" style={{ color: "var(--midnight-grey)" }}>{p}</span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 2vw, 28px)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--black)",
                  lineHeight: 1.4,
                }}
              >
                Because luxury isn&apos;t just how things look.<br />
                It&apos;s how you feel.
              </p>
            </div>
            {/* Right: black card */}
            <div
              style={{
                background: "var(--black)",
                padding: "64px 52px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 32 }}>You deserve to feel taken care of.</p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 52px)",
                  fontWeight: 300,
                  color: "var(--white)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  marginBottom: 40,
                }}
              >
                We are more than vendors; we become your dedicated support system.
              </p>
              <p className="body-lg" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 48 }}>
                Your support system. Your problem solvers. Your behind-the-scenes protectors. So you can be fully present on the most important day of your life.
              </p>
              <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                <span>Book Your Consultation</span>
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .btv-promise-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES QUICK VIEW ── */}
      <section
        style={{ background: "var(--pale)", padding: "120px clamp(24px,5vw,100px)", overflowX: "hidden" }}
        aria-label="Services"
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
            className="btv-services-quick-grid"
          >
            <div>
              <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>05 / Collections</p>
              <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 32 }}>
                Everything you<br /><em>need for your day.</em>
              </h2>
              <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                Whether you need someone to run the day or curate the entire experience, we step in so you can simply show up and enjoy being the bride.
              </p>
              <Link href="/services" className="btn-primary" style={{ display: "inline-flex" }}>
                <span>View All Packages</span>
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {servicesList.map((s, i) => (
                <Link
                  key={s.name}
                  href={s.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 32px",
                    background: i % 2 === 0 ? "var(--white)" : "var(--black)",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    textDecoration: "none",
                    transition: "opacity 0.25s ease",
                    gap: 16,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(16px, 1.5vw, 22px)",
                      fontWeight: 400,
                      color: i % 2 === 0 ? "var(--black)" : "var(--white)",
                    }}
                  >
                    {s.name}
                  </span>
                  <span style={{ color: i % 2 === 0 ? "var(--black)" : "var(--white)", fontSize: 18, flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .btv-services-quick-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{ background: "var(--black)", padding: "160px clamp(24px,5vw,100px)", textAlign: "center" }}
        aria-label="Call to Action"
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 32 }}>Begin Here</p>
          <h2
            className="headline-xl"
            style={{ color: "var(--white)", marginBottom: 32 }}
          >
            Ready to enjoy your wedding<br />
            <em>instead of managing it?</em>
          </h2>
          <p
            className="body-lg"
            style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto 60px" }}
          >
            Let us handle the logistics, timelines, and details while you live fully in the moment.
          </p>
          <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
            <span>Book Your Consultation</span>
            <span style={{ fontSize: 18 }}>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
