"use client";

import Link from "next/link";
import Portfolio from "@/components/Portfolio";

const weddingStories = [
    {
        id: 1,
        title: "Anya & Khalil",
        location: "Amalfi Coast, Italy",
        category: "Destination Wedding",
        year: "2025",
        guests: 85,
        aesthetic: "Cliffside Romanticism",
        challenge: "Managing a 3-day event across 3 different Amalfi villages with a 40-piece orchestra requiring helicopter logistics.",
        color: "#1A1A2E",
        accent: "#C9A96E",
    },
    {
        id: 2,
        title: "Solène & Marcus",
        location: "Château de Vaux, Paris",
        category: "Full Planning & Design",
        year: "2025",
        guests: 180,
        aesthetic: "Grand French Romanticism",
        challenge: "Re-imagining a 17th-century venue with modern sculptural florals while respecting its architectural heritage.",
        color: "#2D1B1B",
        accent: "#E8D5B0",
    },
    {
        id: 3,
        title: "Yemi & Adaeze",
        location: "Lagos & London",
        category: "Cultural Fusion",
        year: "2024",
        guests: 240,
        aesthetic: "Afro-Contemporary Luxury",
        challenge: "Unifying two distinct cultural ceremonies across two continents into a single cohesive visual narrative.",
        color: "#0F1A0F",
        accent: "#8B9E5A",
    },
    {
        id: 4,
        title: "Isabelle & Drew",
        location: "Santorini, Greece",
        category: "Intimate Celebration",
        year: "2024",
        guests: 24,
        aesthetic: "Cycladic Minimalism",
        challenge: "Sourcing sustainable, locally-made decor elements that complemented the stark Cycladic whitewash without competing with the view.",
        color: "#1A1A2E",
        accent: "#DFFFFF",
    },
    {
        id: 5,
        title: "Priya & Sebastian",
        location: "Udaipur, India",
        category: "Palace Wedding",
        year: "2024",
        guests: 350,
        aesthetic: "Regal Rajputana Opulence",
        challenge: "Coordinating 5 events across 5 days for 350 guests, 12 international vendors, and a lakeside palace across two time zones.",
        color: "#1E0D0D",
        accent: "#CC0000",
    },
];

export default function PortfolioPage() {
    return (
        <div style={{ paddingTop: 100 }}>
            {/* Header */}
            <section
                style={{
                    padding: "80px clamp(24px,5vw,100px) 100px",
                    background: "var(--pale)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                        03 — Portfolio
                    </p>
                    <h1 className="headline-xl" style={{ color: "var(--black)", marginBottom: 24 }}>
                        Stories we&apos;ve<br />
                        <em>had the honour to tell.</em>
                    </h1>
                    <p
                        className="body-lg"
                        style={{ color: "var(--midnight-grey)", maxWidth: 520 }}
                    >
                        Each wedding is a chapter. Every couple, an author.
                        We are proud to have held the pen on each of these.
                    </p>
                </div>
            </section>

            {/* Horizontal scroll preview */}
            <Portfolio />

            {/* Full grid */}
            <section
                style={{
                    padding: "80px clamp(24px,5vw,100px) 120px",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <p
                        className="eyebrow"
                        style={{ color: "var(--light-grey)", marginBottom: 60 }}
                    >
                        All Weddings
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {weddingStories.map((w, i) => (
                            <Link
                                key={w.id}
                                href={`/portfolio/${w.id}`}
                                style={{
                                    textDecoration: "none",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 2fr 1fr 1fr",
                                    gap: 40,
                                    alignItems: "center",
                                    padding: "28px 0",
                                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.paddingInline = "16px";
                                    (e.currentTarget as HTMLElement).style.background = "var(--black)";
                                    e.currentTarget.querySelectorAll("[data-dark]").forEach((el) => {
                                        (el as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                                    });
                                    e.currentTarget.querySelectorAll("[data-title]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--white)";
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.paddingInline = "0";
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    e.currentTarget.querySelectorAll("[data-dark]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--light-grey)";
                                    });
                                    e.currentTarget.querySelectorAll("[data-title]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--black)";
                                    });
                                }}
                            >
                                <p
                                    data-dark
                                    className="eyebrow"
                                    style={{ color: "var(--light-grey)", transition: "color 0.3s ease" }}
                                >
                                    0{i + 1}
                                </p>
                                <h3
                                    data-title
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(22px, 2.5vw, 40px)",
                                        fontWeight: 300,
                                        color: "var(--black)",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {w.title}
                                    <em
                                        style={{
                                            fontStyle: "italic",
                                            color: "var(--light-grey)",
                                            marginLeft: 12,
                                            fontSize: "0.7em",
                                        }}
                                    >
                                        {w.location}
                                    </em>
                                </h3>
                                <p
                                    data-dark
                                    className="eyebrow"
                                    style={{ color: "var(--light-grey)", transition: "color 0.3s ease" }}
                                >
                                    {w.category}
                                </p>
                                <p
                                    data-dark
                                    className="eyebrow"
                                    style={{
                                        color: "var(--light-grey)",
                                        textAlign: "right",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {w.year} · {w.guests} guests
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry CTA */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--black)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 className="headline-lg" style={{ color: "var(--white)", marginBottom: 24 }}>
                        Ready to write<br />
                        <em>your chapter?</em>
                    </h2>
                    <p className="body-lg" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>
                        Your wedding belongs in this portfolio. Let us begin.
                    </p>
                    <Link href="/inquiry" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Begin Your Inquiry</span>
                        <span style={{ fontSize: 16 }}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
