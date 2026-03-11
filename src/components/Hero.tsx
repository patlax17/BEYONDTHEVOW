"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!overlayRef.current) return;
            const y = window.scrollY;
            overlayRef.current.style.transform = `translateY(${y * 0.3}px)`;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            role="banner"
            aria-label="Hero"
            style={{
                position: "relative",
                height: "100svh",
                minHeight: 640,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                background: "#080808",
            }}
        >
            {/* ─── VIDEO BACKGROUND ─── */}
            {/* Replace the src below with your video file once ready */}
            {/* e.g. src="/hero-video.mp4" */}
            <div
                ref={overlayRef}
                style={{
                    position: "absolute",
                    inset: "-10%",
                    zIndex: 0,
                }}
            >
                {/* VIDEO PLACEHOLDER — swap this <div> for a <video> tag once the client provides the file */}
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: `
              radial-gradient(ellipse at 20% 70%, rgba(180,120,130,0.28) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.15) 0%, transparent 50%),
              linear-gradient(160deg, #0E0809 0%, #1A0E12 45%, #0C0A0C 100%)
            `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                {/*
          UNCOMMENT BELOW AND REMOVE THE DIV ABOVE ONCE YOU HAVE THE VIDEO:

          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        */}
            </div>

            {/* Dark gradient overlay */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Subtle grain */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
                    opacity: 0.45,
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            />

            {/* Thin vertical accent line */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: 0,
                    right: "clamp(24px,8vw,140px)",
                    width: 1,
                    height: "55vh",
                    background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)",
                    zIndex: 2,
                }}
            />

            {/* Content — sits at bottom of hero */}
            <div
                style={{
                    position: "relative",
                    zIndex: 3,
                    padding: "0 clamp(24px,5vw,100px) clamp(48px,7vh,100px)",
                    maxWidth: 1440,
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {/* Eyebrow */}
                <p
                    className="eyebrow"
                    style={{
                        color: "rgba(255,255,255,0.4)",
                        marginBottom: 28,
                        animation: "fadeIn 1s ease 0.3s both",
                    }}
                >
                    Bridal Beauty Atelier — Beyond The Vow
                </p>

                {/* Main headline */}
                <h1
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(52px, 9vw, 130px)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                        lineHeight: 0.95,
                        color: "var(--white)",
                        marginBottom: 48,
                        animation: "fadeUp 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s both",
                    }}
                >
                    Your Most
                    <br />
                    <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>Beautiful</em>
                    <br />
                    Day.
                </h1>

                {/* Sub + CTA row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 36,
                        animation: "fadeUp 0.9s ease 0.8s both",
                    }}
                >
                    <div style={{ maxWidth: 420 }}>
                        <p
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(17px, 1.5vw, 24px)",
                                fontWeight: 300,
                                fontStyle: "italic",
                                color: "rgba(255,255,255,0.65)",
                                marginBottom: 32,
                                lineHeight: 1.45,
                            }}
                        >
                            Flawless bridal artistry crafted for every complexion —
                            because you deserve to feel as radiant as you look.
                        </p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <Link
                                href="/consultation"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    background: "var(--vogue-red)",
                                    color: "#fff",
                                    fontFamily: "var(--font-body)",
                                    fontSize: 10,
                                    fontWeight: 500,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    padding: "14px 32px",
                                    textDecoration: "none",
                                    transition: "background 0.3s ease",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#A80000")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--vogue-red)")}
                            >
                                Book a Consultation →
                            </Link>
                            <Link
                                href="/gallery"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    background: "transparent",
                                    color: "#fff",
                                    fontFamily: "var(--font-body)",
                                    fontSize: 10,
                                    fontWeight: 500,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    padding: "13px 32px",
                                    border: "1px solid rgba(255,255,255,0.35)",
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "#fff";
                                    el.style.color = "#000";
                                    el.style.borderColor = "#fff";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "transparent";
                                    el.style.color = "#fff";
                                    el.style.borderColor = "rgba(255,255,255,0.35)";
                                }}
                            >
                                View Gallery
                            </Link>
                        </div>
                    </div>

                    {/* Credentials */}
                    <div
                        style={{
                            display: "flex",
                            gap: 40,
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { value: "100+", label: "Brides Served" },
                            { value: "7+", label: "Years Experience" },
                            { value: "100%", label: "Bespoke Looks" },
                        ].map((s) => (
                            <div key={s.label} style={{ textAlign: "right" }}>
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(24px, 2.5vw, 40px)",
                                        fontWeight: 300,
                                        color: "#fff",
                                        lineHeight: 1,
                                        marginBottom: 4,
                                    }}
                                >
                                    {s.value}
                                </p>
                                <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)" }}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: "absolute",
                    bottom: 32,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    animation: "fadeIn 1s ease 1.6s both",
                }}
            >
                <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)" }}>
                    Scroll
                </p>
                <div
                    style={{
                        width: 1,
                        height: 40,
                        background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
                    }}
                />
            </div>
        </section>
    );
}
