"use client";

import Link from "next/link";
import Image from "next/image";

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
                {/* Logo */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
                    <Link href="/" aria-label="Beyond the Vow – home">
                        <Image
                            src="/btv-logo.png"
                            alt="Beyond the Vow"
                            width={500}
                            height={500}
                            style={{
                                height: 110,
                                width: "auto",
                                objectFit: "contain",
                                /* Invert to white so the gold mark reads on the dark footer */
                                filter: "brightness(0) invert(1) opacity(0.85)",
                            }}
                        />
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
