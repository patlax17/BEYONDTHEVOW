"use client";

import Link from "next/link";

const articles = [
    {
        id: 1,
        category: "Trend Report",
        title: "Sculptural Food Architecture: When the Menu Becomes the Decor",
        excerpt:
            "The most visually arresting wedding moments of 2026 are happening at the table. We explore how progressive pastry chefs and culinary artists are turning the reception menu into a three-dimensional art installation.",
        date: "March 2026",
        readTime: "8 min read",
        featured: true,
        color: "#0A0A0A",
    },
    {
        id: 2,
        category: "Design",
        title: "The Return of Maximalist Floral Installations",
        excerpt:
            "After years of minimalist greenery, the pendulum swings. Sculptural, oversized, and wildly abundant — 2026&apos;s floristry is making a statement.",
        date: "February 2026",
        readTime: "6 min read",
        featured: false,
        color: "#1A1A2E",
    },
    {
        id: 3,
        category: "Technology",
        title: "Drone Light Shows: The New Wedding Grand Finale",
        excerpt:
            "Fireworks have had their century. Drone choreography — precisely programmed, colour-saturated, and legally accessible — is the new celebratory spectacle.",
        date: "January 2026",
        readTime: "5 min read",
        featured: false,
        color: "#1E0D0D",
    },
    {
        id: 4,
        category: "Culture",
        title: "The Rise of Multi-Day, Multi-Event Wedding Weekends",
        excerpt:
            "Couples are no longer asking for a wedding day. They are curating a wedding week — and the logistical and design implications are reshaping how we plan entirely.",
        date: "December 2025",
        readTime: "7 min read",
        featured: false,
        color: "#0F1A0F",
    },
    {
        id: 5,
        category: "Editorial",
        title: "Beyond the Registry: The Rise of Experience Gifting",
        excerpt:
            "The new generation of luxury couples do not want more things. They want moments — curated experiences, memory-making travel, and personalised encounters that enrich their life together.",
        date: "November 2025",
        readTime: "6 min read",
        featured: false,
        color: "#1A1505",
    },
    {
        id: 6,
        category: "Sustainability",
        title: "Luxury Without Compromise: The Carbon-Neutral Celebration",
        excerpt:
            "From carbon-offset floral sourcing to zero-waste catering philosophies, we examine how eco-consciousness and extravagance are no longer in contradiction.",
        date: "October 2025",
        readTime: "9 min read",
        featured: false,
        color: "#0A1A0A",
    },
];

export default function JournalPage() {
    const featured = articles.find((a) => a.featured)!;
    const rest = articles.filter((a) => !a.featured);

    return (
        <div style={{ paddingTop: 100 }}>
            {/* Header */}
            <section
                style={{
                    padding: "80px clamp(24px,5vw,100px) 100px",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                        06 — Journal
                    </p>
                    <h1 className="headline-xl" style={{ color: "var(--black)" }}>
                        2026 Trend<br />
                        <em>Intelligence.</em>
                    </h1>
                </div>
            </section>

            {/* Featured article */}
            <section
                style={{
                    padding: "0 clamp(24px,5vw,100px) 80px",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <Link
                        href={`/journal/${featured.id}`}
                        style={{
                            textDecoration: "none",
                            display: "grid",
                            gridTemplateColumns: "1.2fr 1fr",
                            gap: 0,
                            background: "var(--black)",
                        }}
                    >
                        {/* Image placeholder */}
                        <div
                            style={{
                                background: featured.color,
                                minHeight: 480,
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "radial-gradient(ellipse at 30% 70%, rgba(201,169,110,0.2), transparent 60%)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 32,
                                    left: 32,
                                    fontFamily: "var(--font-display)",
                                    fontSize: "min(160px, 20vw)",
                                    fontWeight: 300,
                                    color: "rgba(255,255,255,0.03)",
                                    lineHeight: 1,
                                    userSelect: "none",
                                }}
                            >
                                2026
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                                <p
                                    className="eyebrow"
                                    style={{ color: "var(--vogue-red)", marginBottom: 24 }}
                                >
                                    Featured — {featured.category}
                                </p>
                                <h2
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(28px, 3.5vw, 52px)",
                                        fontWeight: 300,
                                        color: "var(--white)",
                                        lineHeight: 1.1,
                                        marginBottom: 24,
                                    }}
                                >
                                    {featured.title}
                                </h2>
                                <p className="body-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    {featured.excerpt}
                                </p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 48 }}>
                                <div>
                                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 4 }}>
                                        {featured.date}
                                    </p>
                                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.15)" }}>
                                        {featured.readTime}
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.5)",
                                    }}
                                >
                                    Read →
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Article grid */}
            <section
                style={{
                    padding: "0 clamp(24px,5vw,100px) 120px",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
                        {rest.map((article) => (
                            <Link
                                key={article.id}
                                href={`/journal/${article.id}`}
                                style={{
                                    textDecoration: "none",
                                    display: "block",
                                    background: "var(--pale)",
                                    transition: "background 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--black)";
                                    e.currentTarget.querySelectorAll("[data-dark]").forEach((el) => {
                                        (el as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                                    });
                                    e.currentTarget.querySelectorAll("[data-title]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--white)";
                                    });
                                    e.currentTarget.querySelectorAll("[data-sub]").forEach((el) => {
                                        (el as HTMLElement).style.color = "rgba(255,255,255,0.3)";
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--pale)";
                                    e.currentTarget.querySelectorAll("[data-dark]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--midnight-grey)";
                                    });
                                    e.currentTarget.querySelectorAll("[data-title]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--black)";
                                    });
                                    e.currentTarget.querySelectorAll("[data-sub]").forEach((el) => {
                                        (el as HTMLElement).style.color = "var(--light-grey)";
                                    });
                                }}
                            >
                                {/* Color block header */}
                                <div
                                    style={{
                                        background: article.color,
                                        height: 180,
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.04), transparent)",
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "32px 32px 40px" }}>
                                    <p
                                        data-sub
                                        className="eyebrow"
                                        style={{ color: "var(--light-grey)", marginBottom: 16, transition: "color 0.3s ease" }}
                                    >
                                        {article.category} · {article.date}
                                    </p>
                                    <h3
                                        data-title
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(18px, 1.8vw, 28px)",
                                            fontWeight: 400,
                                            color: "var(--black)",
                                            lineHeight: 1.2,
                                            marginBottom: 16,
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {article.title}
                                    </h3>
                                    <p
                                        data-sub
                                        className="eyebrow"
                                        style={{ color: "var(--light-grey)", transition: "color 0.3s ease" }}
                                    >
                                        {article.readTime}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px)",
                    background: "var(--black)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 560, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 20 }}>
                        The Edit
                    </p>
                    <h2 className="headline-md" style={{ color: "var(--white)", marginBottom: 16 }}>
                        Stay ahead of the aesthetic.
                    </h2>
                    <p className="body-sm" style={{ color: "rgba(255,255,255,0.35)", marginBottom: 40 }}>
                        Monthly trend intelligence, early access to our editorial, and exclusive
                        curations for our readers. No noise, only signal.
                    </p>
                    <form
                        style={{
                            display: "flex",
                            gap: 0,
                            borderBottom: "1px solid rgba(255,255,255,0.2)",
                        }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="your@email.com"
                            style={{
                                flex: 1,
                                background: "transparent",
                                border: "none",
                                padding: "12px 0",
                                fontFamily: "var(--font-body)",
                                fontSize: 14,
                                fontWeight: 300,
                                color: "var(--white)",
                                outline: "none",
                            }}
                            aria-label="Email for newsletter"
                        />
                        <button
                            type="submit"
                            style={{
                                background: "none",
                                border: "none",
                                color: "var(--vogue-red)",
                                fontFamily: "var(--font-body)",
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                padding: "12px 0 12px 24px",
                            }}
                        >
                            Subscribe →
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
