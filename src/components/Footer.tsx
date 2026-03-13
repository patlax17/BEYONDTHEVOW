"use client";

import Link from "next/link";

const footerLinks = {
    Studio: [
        { label: "About Us", href: "/about" },
        { label: "Meet the Team", href: "/about#founders" },
    ],
    Services: [
        { label: "Day-Of Coordination", href: "/services" },
        { label: "Month-Of Coordination", href: "/services" },
        { label: "Full Planning + Design", href: "/services" },
        { label: "Bridal Makeup Services", href: "/bridal-makeup" },
    ],
    Explore: [
        { label: "Gallery", href: "/gallery" },
        { label: "Bridal Beauty", href: "/bridal-makeup" },
        { label: "Book a Consultation", href: "/consultation" },
    ],
    Connect: [
        { label: "Inquire Now", href: "/consultation" },
        { label: "Email Us", href: "mailto:hello@beyondthevow.com" },
        { label: "Instagram", href: "https://www.instagram.com/beyondthevow_beauty/", target: "_blank" },
        { label: "TikTok", href: "https://www.tiktok.com/@beyondthevow", target: "_blank" },
    ],
};

export default function Footer() {
    return (
        <footer
            style={{
                background: "var(--black)",
                color: "var(--white)",
                padding: "80px clamp(24px,5vw,100px) 40px",
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                {/* Top row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: 60,
                        marginBottom: 80,
                        alignItems: "start",
                    }}
                >
                    <div>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(36px, 5vw, 72px)",
                                fontWeight: 300,
                                lineHeight: 0.95,
                                letterSpacing: "-0.02em",
                                marginBottom: 24,
                                color: "var(--white)",
                            }}
                        >
                            Every bride deserves<br />
                            <em>to feel taken care of.</em>
                        </h2>
                        <p className="body-sm" style={{ color: "var(--light-grey)", maxWidth: 420 }}>
                            From the initial preparations to the final dance, we provide the calm, the detail, and the behind-the-scenes magic that makes your day effortless.
                        </p>
                    </div>
                    <Link href="/consultation" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
                        <span>Book a Consultation</span>
                    </Link>
                </div>

                {/* Divider */}
                <div className="divider" style={{ opacity: 0.15, marginBottom: 60 }} />

                {/* Link grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: "48px 24px",
                        marginBottom: 80,
                    }}
                >
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                                {category}
                            </p>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            target={(link as { target?: string }).target}
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: 13,
                                                fontWeight: 300,
                                                color: "rgba(255,255,255,0.6)",
                                                textDecoration: "none",
                                                transition: "color 0.3s ease",
                                            }}
                                            onMouseEnter={(e) =>
                                                ((e.target as HTMLElement).style.color = "var(--white)")
                                            }
                                            onMouseLeave={(e) =>
                                                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")
                                            }
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom row */}
                <div className="divider" style={{ opacity: 0.1, marginBottom: 28 }} />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 16,
                    }}
                >
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)" }}>
                        © 2026 Beyond The Vow. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 32 }}>
                        {["Privacy Policy", "Terms of Service"].map((t) => (
                            <Link
                                key={t}
                                href="#"
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: 10,
                                    fontWeight: 300,
                                    color: "rgba(255,255,255,0.3)",
                                    textDecoration: "none",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                {t}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
