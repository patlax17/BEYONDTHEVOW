"use client";

import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const makeupServices = [
    {
        name: "Full Bridal Glam",
        desc: "Your complete wedding day look — from skin prep to the final lash. Customized to your vision, your skin tone, and the vibe of your day.",
        includes: [
            "In-depth pre-wedding consultation",
            "Skin prep + primer application",
            "Full foundation + concealer",
            "Eye artistry (shadow, liner, lashes)",
            "Contour, highlight, blush",
            "Long-wear lip",
            "Setting spray for all-day wear",
        ],
    },
    {
        name: "Bridal Trial Session",
        desc: "A dedicated session before your big day to perfect your look, test products on your skin, and arrive at the altar with complete confidence.",
        includes: [
            "Full makeup application",
            "Product customization to your skin",
            "Longevity and photography test",
            "Look refinement based on feedback",
            "Style saves for wedding day reference",
        ],
    },
    {
        name: "Bridesmaids & Bridal Party",
        desc: "Cohesive, glowing looks for your entire squad. We coordinate the aesthetic so everyone looks stunning — together.",
        includes: [
            "Group pricing available",
            "Coordinated color palette",
            "Flexible scheduling & timing",
            "Dedicated artist per 4-5 clients",
            "Flawless all-day wear formula",
        ],
    },
    {
        name: "Airbrush Finish",
        desc: "Ultra-smooth, camera-ready perfection. Airbrush makeup is our most requested upgrade — and once you feel it, you'll understand why.",
        includes: [
            "HD airbrush foundation",
            "Buildable, weightless coverage",
            "Custom-matched to your skin",
            "Photo and video proof finish",
            "12+ hour wear guarantee",
        ],
    },
];

const builtInBeauty = [
    "Emergency lash application",
    "Blotting + shine control",
    "Lip touch-up throughout the day",
    "Photo-readiness checks",
    "Beauty emergency kit on-site",
    "Calm, expert hands when you need them",
];

export default function BridalMakeupClient() {
    return (
        <div>
            <PageHeader
                eyebrow="Bridal Beauty"
                title={<>Where artistry<br /><em>meets your skin.</em></>}
                subtitle="Professional bridal makeup by Maryleen — 10+ years of experience with brides, celebrities, and television productions. Every look is crafted for you, by you."
            />

            {/* ARTIST BIO */}
            <section style={{ padding: "120px clamp(24px,5vw,100px)", background: "var(--white)" }}>
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div
                        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
                        className="btv-bio-grid"
                    >
                        {/* Maryleen action photo — working at wedding */}
                        <div
                            style={{
                                position: "relative",
                                aspectRatio: "4/5",
                                overflow: "hidden",
                                minHeight: 480,
                                background: "#0f0f0f",
                            }}
                        >
                            <Image
                                src="/maryleen-action.png"
                                alt="Maryleen coordinating a luxury wedding — Beyond the Vow"
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Gold accent bar */}
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: 3,
                                    background: "linear-gradient(to right, transparent, rgba(201,169,110,0.6), transparent)",
                                }}
                            />
                        </div>

                        {/* Bio text */}
                        <div>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 20 }}>
                                Meet the Artist
                            </p>
                            <h2
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(36px, 4.5vw, 68px)",
                                    fontWeight: 300,
                                    color: "var(--black)",
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.05,
                                    marginBottom: 32,
                                }}
                            >
                                Maryleen
                                <br />
                                <em style={{ fontSize: "0.65em", color: "var(--light-grey)" }}>Founder · Lead Bridal Artist</em>
                            </h2>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                                With over 10 years in the wedding industry, Maryleen has worked with hundreds of brides, celebrity clients, and television productions — building a reputation for making every person feel like the most beautiful version of themselves.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                                Her artistry isn&apos;t about a look you saw on Pinterest. It&apos;s about <em>you</em> — your skin, your features, and the feeling you want to carry into one of the most photographed moments of your life.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                                What makes her truly rare? She&apos;s also your coordinator. Which means beauty runs through every part of your day — not just the morning.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                                <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                                    <span>Book Your Bridal Makeup</span>
                                </Link>
                                <Link href="/gallery" className="btn-outline" style={{ display: "inline-flex" }}>
                                    <span>View Gallery</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`@media(max-width:768px){.btv-bio-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
            </section>

            {/* VIDEO WORK SECTION */}
            <section style={{ background: "var(--black)", padding: "100px clamp(24px,5vw,100px)", overflow: "hidden" }}>
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    {/* Header */}
                    <div style={{ marginBottom: 72, textAlign: "center" }}>
                        <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>The Work</p>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(36px, 5vw, 80px)",
                                fontWeight: 300,
                                color: "var(--white)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.0,
                            }}
                        >
                            See the artistry<br /><em>in motion.</em>
                        </h2>
                    </div>

                    {/* ── CENTERED PORTRAIT VIDEO ── */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "clamp(32px, 5vw, 80px)",
                            flexWrap: "wrap",
                        }}
                    >
                        {/* Left quote — decorative, desktop only */}
                        <div className="btv-video-quote" style={{ maxWidth: 240, textAlign: "right" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(20px, 2vw, 28px)",
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    color: "rgba(255,255,255,0.3)",
                                    lineHeight: 1.5,
                                }}
                            >
                                &ldquo;Every look
                                <br />is crafted for
                                <br /><em style={{ color: "rgba(201,169,110,0.7)" }}>you.</em>&rdquo;
                            </p>
                        </div>

                        {/* Portrait video frame */}
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 420,
                                aspectRatio: "9/16",
                                overflow: "hidden",
                                background: "#0a0a0a",
                                flexShrink: 0,
                                boxShadow: "0 0 0 1px rgba(201,169,110,0.25), 0 40px 80px rgba(0,0,0,0.6)",
                            }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center top",
                                    display: "block",
                                }}
                            >
                                <source src="/makeup-video-1.mp4" type="video/mp4" />
                            </video>

                            {/* Bottom gradient overlay */}
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "35%",
                                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Label */}
                            <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center" }}>
                                <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.22em" }}>
                                    Bridal Glam · Beyond the Vow
                                </p>
                            </div>
                        </div>

                        {/* Right quote — decorative, desktop only */}
                        <div className="btv-video-quote" style={{ maxWidth: 240, textAlign: "left" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(20px, 2vw, 28px)",
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    color: "rgba(255,255,255,0.3)",
                                    lineHeight: 1.5,
                                }}
                            >
                                Flawless
                                <br />from the
                                <br /><em style={{ color: "rgba(201,169,110,0.7)" }}>first touch.</em>
                            </p>
                        </div>
                    </div>

                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 11,
                            color: "rgba(255,255,255,0.18)",
                            textAlign: "center",
                            marginTop: 48,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                        }}
                    >
                        More work coming soon
                    </p>
                </div>

                <style>{`
                    @media (max-width: 768px) {
                        .btv-video-quote { display: none !important; }
                    }
                `}</style>
            </section>

            {/* SERVICES */}
            <section style={{ padding: "100px clamp(24px,5vw,100px)", background: "var(--pale)", overflowX: "hidden" }}>
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ marginBottom: 64 }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 16 }}>What We Offer</p>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(32px, 4.5vw, 72px)",
                                fontWeight: 300,
                                color: "var(--black)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.0,
                            }}
                        >
                            Bridal Beauty<br /><em>Services</em>
                        </h2>
                    </div>
                    <div className="btv-beauty-services-grid">
                        {makeupServices.map((svc, i) => (
                            <div
                                key={svc.name}
                                style={{
                                    background: i % 2 === 1 ? "var(--black)" : "var(--white)",
                                    padding: "52px 44px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <p className="eyebrow" style={{ color: i % 2 === 1 ? "var(--vogue-red)" : "var(--light-grey)", marginBottom: 16 }}>
                                    0{i + 1}
                                </p>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(22px, 2.5vw, 36px)",
                                        fontWeight: 400,
                                        color: i % 2 === 1 ? "var(--white)" : "var(--black)",
                                        marginBottom: 20,
                                        lineHeight: 1.15,
                                    }}
                                >
                                    {svc.name}
                                </h3>
                                <p className="body-sm" style={{ color: i % 2 === 1 ? "rgba(255,255,255,0.5)" : "var(--midnight-grey)", marginBottom: 36, lineHeight: 1.8, flexGrow: 1 }}>
                                    {svc.desc}
                                </p>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
                                    {svc.includes.map((item) => (
                                        <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 300, color: i % 2 === 1 ? "rgba(255,255,255,0.45)" : "var(--midnight-grey)" }}>
                                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: i % 2 === 1 ? "var(--vogue-red)" : "var(--light-grey)", display: "inline-block", flexShrink: 0 }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/consultation" className={i % 2 === 1 ? "btn-primary" : "btn-outline"} style={{ display: "inline-flex", fontSize: 10, alignSelf: "flex-start" }}>
                                    <span>Book This Service</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    .btv-beauty-services-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; }
                    @media(max-width:768px){ .btv-beauty-services-grid { grid-template-columns: 1fr !important; } }
                `}</style>
            </section>

            {/* BUILT-IN BEAUTY NOTE */}
            <section style={{ background: "var(--white)", padding: "100px clamp(24px,5vw,100px)" }}>
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="btv-beauty-note-grid">
                        <div>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 20 }}>The Beyond the Vow Difference</p>
                            <h2
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(28px, 4vw, 60px)",
                                    fontWeight: 300,
                                    color: "var(--black)",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 32,
                                }}
                            >
                                Beauty is built<br /><em>into everything we do.</em>
                            </h2>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                                Even if you don&apos;t book a full beauty package, our makeup expertise never leaves the room. Every coordination package includes built-in beauty support — touch-ups, lash fixes, shine control, and emergency prep — because looking perfect is part of the day we&apos;re managing.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                                Most coordinators can&apos;t say that. We can.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                                <Link href="/services" className="btn-primary" style={{ display: "inline-flex" }}>
                                    <span>View Coordination Packages</span>
                                </Link>
                                <Link href="/consultation" className="btn-outline" style={{ display: "inline-flex" }}>
                                    <span>Book a Consultation</span>
                                </Link>
                            </div>
                        </div>
                        <div style={{ background: "var(--black)", padding: "56px 48px", position: "relative", overflow: "hidden" }}>
                            <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 0%, rgba(201,169,110,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
                            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 32 }}>Every package includes:</p>
                            {builtInBeauty.map((item) => (
                                <div key={item} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                                    <span style={{ fontSize: 10, color: "var(--vogue-red)", flexShrink: 0 }}>✦</span>
                                    <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`@media(max-width:768px){.btv-beauty-note-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
            </section>

            {/* CTA */}
            <section style={{ background: "var(--black)", padding: "120px clamp(24px,5vw,100px)", textAlign: "center" }}>
                <div style={{ maxWidth: 680, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 32 }}>Ready for your look?</p>
                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(36px, 5vw, 76px)",
                            fontWeight: 300,
                            color: "var(--white)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            marginBottom: 48,
                        }}
                    >
                        Artistry for<br /><em>the most important<br />morning of your life.</em>
                    </h2>
                    <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Book Your Bridal Makeup</span>
                        <span style={{ fontSize: 18 }}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
