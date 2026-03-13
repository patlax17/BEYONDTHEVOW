import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "Services + Packages | Beyond the Vow",
    description: "Luxury wedding coordination packages from Beyond the Vow. Day-Of Coordination from $1,800, Month-Of from $3,000, and Full Planning + Design from $6,000. Built-in beauty support and content creation included.",
};

const packages = [
    {
        badge: "💍",
        tier: "The Signature",
        subtitle: "Day-Of Coordination",
        tagline: "For the couple who planned everything but wants a flawless execution.",
        price: "From $1,800 to $2,500",
        accent: false,
        features: [
            "Final timeline creation",
            "Vendor confirmations",
            "Wedding day management",
            "Bridal party organization",
            "Setup supervision",
            "Decor oversight",
            "Emergency kit access",
            "Built-in makeup touch-ups",
            "Wedding day content capture",
            "Full coordination team on site",
        ],
        highlight: "You planned it. We perfect it.",
        cta: "Inquire About This Package",
    },
    {
        badge: "💐",
        tier: "The Luxe",
        subtitle: "Month-Of Coordination",
        tagline: "For the couple who wants guidance + hands-on support leading up to the big day.",
        price: "From $3,000 to $4,500",
        accent: true,
        features: [
            "Everything in The Signature, PLUS:",
            "Full management leading up to the event",
            "Vendor communication & management",
            "Layout + decor planning assistance",
            "Final walkthrough",
            "Design + styling guidance",
            "Rehearsal coordination",
            "Expanded content creation",
            "Full coordination team",
        ],
        highlight: "Luxury support. Zero stress. Total confidence.",
        cta: "Inquire About This Package",
    },
    {
        badge: "👑",
        tier: "The Beyond Experience",
        subtitle: "Full Planning + Design",
        tagline: "Our premier white-glove experience, providing all-inclusive management from concept to completion.",
        price: "Custom pricing from $6,000+",
        accent: false,
        features: [
            "Full planning from start to finish",
            "Vendor sourcing & booking assistance",
            "Budget management",
            "Design + decor styling",
            "Timeline creation",
            "Venue walkthroughs",
            "Complete wedding day production team",
            "Content creation coverage",
            "Bridal makeup included",
            "Touch-up support",
            "Unlimited communication",
            "Wedding Day Content Creation",
        ],
        highlight: "This is the 'show up and glow' package.",
        cta: "Book a Custom Consultation",
    },
];

const addOns = [
    { name: "Bridal Makeup Services", desc: "Professional bridal glam by our co-founder." },
    { name: "Content Creation Only", desc: "Behind-the-scenes coverage and same-day digital assets for social media." },
    { name: "Destination Weddings", desc: "White-glove coordination anywhere in the world." },
    { name: "Bridal Shower / Engagement Coordination", desc: "Full coordination for pre-wedding celebrations." },
    { name: "Extra Assistants", desc: "Additional team members for larger events." },
    { name: "Extended Hours", desc: "Coverage beyond your standard event window." },
];

export default function ServicesPage() {
    return (
        <div>
            <PageHeader
                eyebrow="Services + Pricing"
                title={<>Our Services</>}
                subtitle="Luxury coordination and intentional design for the discerning couple. We manage every detail so you can remain fully present throughout your celebration."
            />

            {/* PACKAGES */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                    overflowX: "hidden",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div className="btv-packages-3col">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.tier}
                                style={{
                                    background: pkg.accent ? "var(--black)" : "var(--white)",
                                    padding: "56px 44px",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Glow for accent card */}
                                {pkg.accent && (
                                    <div
                                        aria-hidden
                                        style={{
                                            position: "absolute",
                                            top: -60,
                                            right: -60,
                                            width: 240,
                                            height: 240,
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)",
                                            pointerEvents: "none",
                                        }}
                                    />
                                )}

                                <div style={{ marginBottom: 32 }}>
                                    <span style={{ fontSize: 32, display: "block", marginBottom: 20 }}>{pkg.badge}</span>
                                    <p
                                        className="eyebrow"
                                        style={{
                                            color: pkg.accent ? "var(--vogue-red)" : "var(--light-grey)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        {pkg.subtitle}
                                    </p>
                                    <h2
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(26px, 3vw, 40px)",
                                            fontWeight: 400,
                                            color: pkg.accent ? "var(--white)" : "var(--black)",
                                            lineHeight: 1.1,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {pkg.tier}
                                    </h2>
                                    <p
                                        className="body-sm"
                                        style={{
                                            color: pkg.accent ? "rgba(255,255,255,0.5)" : "var(--midnight-grey)",
                                            marginBottom: 20,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {pkg.tagline}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(18px, 1.8vw, 26px)",
                                            fontWeight: 400,
                                            color: pkg.accent ? "rgba(201,169,110,0.9)" : "var(--black)",
                                        }}
                                    >
                                        {pkg.price}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div
                                    style={{
                                        height: 1,
                                        background: pkg.accent ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                                        marginBottom: 32,
                                    }}
                                />

                                {/* Features */}
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, flexGrow: 1 }}>
                                    {pkg.features.map((f) => (
                                        <li
                                            key={f}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 12,
                                                fontFamily: "var(--font-body)",
                                                fontSize: 13,
                                                fontWeight: 300,
                                                color: pkg.accent ? "rgba(255,255,255,0.6)" : "var(--midnight-grey)",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: 5,
                                                    height: 5,
                                                    borderRadius: "50%",
                                                    background: pkg.accent ? "var(--vogue-red)" : "var(--light-grey)",
                                                    display: "inline-block",
                                                    flexShrink: 0,
                                                    marginTop: 6,
                                                }}
                                            />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Highlight */}
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 16,
                                        fontStyle: "italic",
                                        color: pkg.accent ? "rgba(255,255,255,0.4)" : "var(--light-grey)",
                                        margin: "32px 0",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    ✨ {pkg.highlight}
                                </p>

                                <Link
                                    href="/consultation"
                                    className={pkg.accent ? "btn-primary" : "btn-outline"}
                                    style={{ display: "inline-flex", fontSize: 10 }}
                                >
                                    <span>{pkg.cta}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    .btv-packages-3col {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2px;
                    }
                    @media (max-width: 900px) {
                        .btv-packages-3col { grid-template-columns: 1fr !important; }
                    }
                `}</style>
            </section>

            {/* ADD-ONS */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ marginBottom: 64 }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 16 }}>Customize Your Experience</p>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(32px, 4vw, 64px)",
                                fontWeight: 300,
                                color: "var(--black)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.05,
                            }}
                        >
                            ✨ Add-Ons
                        </h2>
                    </div>

                    <div className="btv-addons-grid">
                        {addOns.map((a, i) => (
                            <div
                                key={a.name}
                                style={{
                                    padding: "36px 32px",
                                    background: i % 2 === 0 ? "var(--pale)" : "var(--white)",
                                    borderTop: "1px solid rgba(0,0,0,0.07)",
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(18px, 2vw, 26px)",
                                        fontWeight: 400,
                                        color: "var(--black)",
                                        marginBottom: 10,
                                    }}
                                >
                                    {a.name}
                                </h3>
                                <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    .btv-addons-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2px;
                    }
                    @media (max-width: 768px) {
                        .btv-addons-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>
            </section>

            {/* NOTE */}
            <section
                style={{
                    padding: "80px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 16 }}>
                        Not sure which package is right for you?
                    </p>
                    <p className="body-sm" style={{ color: "var(--light-grey)", marginBottom: 48 }}>
                        Every wedding is different. Book a free consultation and we&apos;ll guide you to the perfect package for your day, your vision, and your budget.
                    </p>
                    <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Book a Free Consultation</span>
                        <span style={{ fontSize: 18 }}>→</span>
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section
                style={{
                    background: "var(--black)",
                    padding: "120px clamp(24px,5vw,100px)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 32 }}>Ready?</p>
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
                        Ready to enjoy your wedding<br />
                        <em>instead of managing it?</em>
                    </h2>
                    <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Book Your Consultation</span>
                        <span style={{ fontSize: 18 }}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
