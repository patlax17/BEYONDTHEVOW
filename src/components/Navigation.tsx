"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Bridal Makeup", href: "/bridal-makeup" },
    { label: "How to Book", href: "/consultation" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Only the homepage has a dark hero — everywhere else nav is always solid white
    const isHeroPage = pathname === "/";

    useEffect(() => {
        // Reset scroll state when route changes
        setScrolled(window.scrollY > 60);
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // On non-hero pages, always show solid white nav
    // On homepage, start transparent then go solid on scroll
    const isTransparent = isHeroPage && !scrolled;

    const navBg = isTransparent ? "transparent" : "rgba(255,255,255,0.97)";
    const navShadow = isTransparent ? "none" : "0 1px 0 rgba(0,0,0,0.08)";
    const textColor = isTransparent ? "var(--white)" : "var(--black)";
    const subtitleColor = isTransparent ? "rgba(255,255,255,0.5)" : "var(--light-grey)";

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "background 0.4s ease, box-shadow 0.4s ease",
                    background: navBg,
                    boxShadow: navShadow,
                    backdropFilter: !isTransparent ? "blur(20px)" : "none",
                    WebkitBackdropFilter: !isTransparent ? "blur(20px)" : "none",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px clamp(24px,5vw,100px)",
                        maxWidth: 1440,
                        margin: "0 auto",
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 2,
                            flexShrink: 0,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(16px, 1.6vw, 22px)",
                                fontWeight: 300,
                                letterSpacing: "0.04em",
                                color: textColor,
                                lineHeight: 1,
                                transition: "color 0.4s ease",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Beyond The Vow
                        </span>
                        <span
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: 7,
                                fontWeight: 400,
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                color: subtitleColor,
                                transition: "color 0.4s ease",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Wedding Coordination & Beauty
                        </span>
                    </Link>

                    {/* Center Nav — desktop */}
                    <nav
                        style={{
                            display: "flex",
                            gap: 36,
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                        className="btv-desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: 10,
                                    fontWeight: 400,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: pathname === link.href
                                        ? (isTransparent ? "var(--white)" : "var(--vogue-red)")
                                        : textColor,
                                    textDecoration: "none",
                                    transition: "color 0.4s ease, opacity 0.3s ease",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.55")}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
                        <Link
                            href="/consultation"
                            className="btv-desktop-nav"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "var(--vogue-red)",
                                color: "var(--white)",
                                fontFamily: "var(--font-body)",
                                fontSize: 9,
                                fontWeight: 500,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                padding: "11px 24px",
                                textDecoration: "none",
                                transition: "background 0.3s ease",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--black)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--vogue-red)")}
                        >
                            Book a Consultation
                        </Link>

                        {/* Hamburger */}
                        <button
                            id="nav-menu-toggle"
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="btv-mobile-nav"
                            style={{
                                display: "none",
                                flexDirection: "column",
                                gap: 5,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 4,
                            }}
                        >
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    style={{
                                        width: 22,
                                        height: 1,
                                        background: textColor,
                                        display: "block",
                                        transition: "all 0.3s ease",
                                        transform:
                                            menuOpen
                                                ? i === 0
                                                    ? "translateY(6px) rotate(45deg)"
                                                    : i === 2
                                                        ? "translateY(-6px) rotate(-45deg)"
                                                        : "scaleX(0)"
                                                : "none",
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 999,
                    background: "#0A0A0A",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 40,
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
            >
                {navLinks.map((link, i) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(32px, 7vw, 56px)",
                            fontWeight: 300,
                            color: "#fff",
                            textDecoration: "none",
                            letterSpacing: "-0.01em",
                            opacity: menuOpen ? 1 : 0,
                            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                            transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/consultation"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        marginTop: 16,
                        display: "inline-flex",
                        background: "var(--vogue-red)",
                        color: "#fff",
                        padding: "14px 36px",
                        fontFamily: "var(--font-body)",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                    }}
                >
                    Book a Consultation
                </Link>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .btv-desktop-nav { display: none !important; }
          .btv-mobile-nav { display: flex !important; }
        }
        @media (min-width: 901px) {
          .btv-mobile-nav { display: none !important; }
        }
      `}</style>
        </>
    );
}
