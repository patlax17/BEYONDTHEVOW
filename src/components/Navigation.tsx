"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Bridal Beauty", href: "/bridal-makeup" },
    { label: "Gallery", href: "/gallery" },
    { label: "Inquire", href: "/consultation" },
];

// SVG Icons
const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TikTokIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    </svg>
);

export default function Navigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const isHeroPage = pathname === "/";

    useEffect(() => {
        setScrolled(window.scrollY > 80);
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // On non-hero pages: always solid white
    // On homepage: transparent at top, solid on scroll
    const isTransparent = isHeroPage && !scrolled;

    const navBg = isTransparent ? "transparent" : "var(--white)";
    const navBorder = isTransparent ? "none" : "1px solid rgba(0,0,0,0.08)";
    const textColor = isTransparent ? "var(--white)" : "var(--black)";
    const subtitleColor = isTransparent ? "rgba(255,255,255,0.45)" : "var(--light-grey)";
    const iconColor = isTransparent ? "rgba(255,255,255,0.6)" : "var(--midnight-grey)";
    const dividerColor = isTransparent ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "background 0.45s ease, border-color 0.45s ease",
                    background: navBg,
                    borderBottom: navBorder,
                    backdropFilter: !isTransparent ? "blur(16px)" : "none",
                    WebkitBackdropFilter: !isTransparent ? "blur(16px)" : "none",
                }}
            >
                {/* ── TOP ROW: social icons | brand | hamburger ── */}
                {/* Uses relative positioning so brand is always truly centred regardless of what's on left/right */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px clamp(20px,5vw,100px) 14px",
                        maxWidth: 1440,
                        margin: "0 auto",
                    }}
                >
                    {/* LEFT: Social icons — desktop only */}
                    <div
                        className="btv-desktop-nav"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 18,
                            color: iconColor,
                            transition: "color 0.4s ease",
                            flexShrink: 0,
                        }}
                    >
                        <a
                            href="https://www.instagram.com/beyondthevow_beauty/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            style={{ color: "inherit", display: "flex", alignItems: "center", transition: "opacity 0.25s ease", textDecoration: "none" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://www.facebook.com/beyondthevow"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            style={{ color: "inherit", display: "flex", alignItems: "center", transition: "opacity 0.25s ease", textDecoration: "none" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://www.tiktok.com/@beyondthevow"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            style={{ color: "inherit", display: "flex", alignItems: "center", transition: "opacity 0.25s ease", textDecoration: "none" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                        >
                            <TikTokIcon />
                        </a>
                    </div>

                    {/* CENTER: Brand name — absolutely centred on desktop, static on mobile */}
                    <Link
                        href="/"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 3,
                            /* On desktop the brand is absolutely centred in the bar */
                        }}
                        className="btv-brand-link"
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(16px, 2vw, 26px)",
                                fontWeight: 300,
                                letterSpacing: "0.06em",
                                color: textColor,
                                lineHeight: 1,
                                transition: "color 0.45s ease",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Beyond the Vow
                        </span>
                        <span
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: 7,
                                fontWeight: 400,
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                color: subtitleColor,
                                transition: "color 0.45s ease",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Wedding Coordination &amp; Bridal Experience
                        </span>
                    </Link>

                    {/* RIGHT: Book CTA (desktop) + Hamburger (mobile) — always flex-end */}
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
                                padding: "10px 22px",
                                textDecoration: "none",
                                transition: "background 0.3s ease",
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--black)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--vogue-red)")}
                        >
                            Book a Consultation
                        </Link>

                        {/* Hamburger — always in the DOM, shown only on mobile via CSS */}
                        <button
                            id="nav-menu-toggle"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                display: "none", /* overridden by btv-mobile-nav CSS */
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 5,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "6px 4px",
                                zIndex: 1001,
                                flexShrink: 0,
                            }}
                            className="btv-mobile-nav"
                        >
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    style={{
                                        width: 24,
                                        height: 1.5,
                                        background: menuOpen ? "var(--white)" : textColor,
                                        display: "block",
                                        borderRadius: 2,
                                        transition: "all 0.3s ease",
                                        transformOrigin: "center",
                                        transform: menuOpen
                                            ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                                                : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                                                : "scaleX(0)"
                                            : "none",
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </div>

                {/* ── THIN DIVIDER ── */}
                <div
                    className="btv-desktop-nav"
                    style={{
                        height: 1,
                        background: dividerColor,
                        transition: "background 0.45s ease",
                        maxWidth: 1440,
                        margin: "0 auto",
                        marginInline: "clamp(24px,5vw,100px)",
                    }}
                />

                {/* ── BOTTOM ROW: Nav links centered ── */}
                <nav
                    className="btv-desktop-nav"
                    aria-label="Main navigation"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 40,
                        padding: "12px clamp(24px,5vw,100px)",
                        maxWidth: 1440,
                        margin: "0 auto",
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: 10,
                                    fontWeight: isActive ? 500 : 400,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: isActive
                                        ? (isTransparent ? "var(--white)" : "var(--vogue-red)")
                                        : textColor,
                                    textDecoration: "none",
                                    transition: "color 0.35s ease, opacity 0.3s ease",
                                    position: "relative",
                                    paddingBottom: 2,
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) (e.currentTarget as HTMLElement).style.opacity = "0.55";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.opacity = "1";
                                }}
                            >
                                {link.label}
                                {isActive && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            bottom: -2,
                                            left: 0,
                                            right: 0,
                                            height: 1,
                                            background: isTransparent ? "var(--white)" : "var(--vogue-red)",
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </header>

            {/* Mobile Full-Screen Menu */}
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
                    gap: 36,
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
            >
                {/* Mobile social icons */}
                <div style={{ display: "flex", gap: 24, marginBottom: 8 }}>
                    {[
                        { href: "https://www.instagram.com/beyondthevow_beauty/", label: "Instagram", Icon: InstagramIcon },
                        { href: "https://www.facebook.com/beyondthevow", label: "Facebook", Icon: FacebookIcon },
                        { href: "https://www.tiktok.com/@beyondthevow", label: "TikTok", Icon: TikTokIcon },
                    ].map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            style={{ color: "rgba(255,255,255,0.45)", display: "flex" }}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

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
          /* On mobile: brand stays in normal flow between left/right slots */
          .btv-brand-link {
            flex: 1;
            justify-content: center;
          }
        }
        @media (min-width: 901px) {
          .btv-mobile-nav { display: none !important; }
          /* On desktop: brand is absolutely centred in the nav bar */
          .btv-brand-link {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: auto;
          }
        }
      `}</style>
        </>
    );
}
