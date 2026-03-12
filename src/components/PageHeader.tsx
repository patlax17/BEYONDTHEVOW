import React from "react";

interface PageHeaderProps {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
    /** Optional right-side element (e.g. a short blurb) */
    aside?: React.ReactNode;
}

/**
 * Shared page-header banner used across all inner pages.
 * Gives each section a clearly separate, editorial identity
 * that mirrors the ccweddingdesign.com layout approach.
 */
export default function PageHeader({ eyebrow, title, subtitle, aside }: PageHeaderProps) {
    return (
        <section
            style={{
                background: "var(--black)",
                paddingTop: "clamp(120px, 15vw, 170px)", // clears the taller nav
                paddingBottom: 0,
                paddingInline: "clamp(24px,5vw,100px)",
                position: "relative",
                overflow: "hidden",
            }}
            aria-label="Page header"
        >
            {/* Subtle radial glow */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse at 70% 0%, rgba(201,169,110,0.10) 0%, transparent 55%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
                {/* Eyebrow */}
                <p
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.28)",
                        marginBottom: 28,
                    }}
                >
                    {eyebrow}
                </p>

                {/* Title + optional aside */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: aside ? "1fr 1fr" : "1fr",
                        gap: 60,
                        alignItems: "end",
                        paddingBottom: 64,
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(48px, 7vw, 100px)",
                            fontWeight: 300,
                            letterSpacing: "-0.02em",
                            lineHeight: 0.97,
                            color: "var(--white)",
                        }}
                    >
                        {title}
                    </h1>

                    {(aside || subtitle) && (
                        <div style={{ alignSelf: "end" }}>
                            {subtitle && (
                                <p
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: "clamp(14px, 1.2vw, 18px)",
                                        fontWeight: 300,
                                        lineHeight: 1.75,
                                        color: "rgba(255,255,255,0.42)",
                                    }}
                                >
                                    {subtitle}
                                </p>
                            )}
                            {aside}
                        </div>
                    )}
                </div>

                {/* Bottom rule that bleeds edge-to-edge */}
                <div
                    style={{
                        height: 1,
                        background: "rgba(255,255,255,0.10)",
                        marginInline: "calc(-1 * clamp(24px,5vw,100px))",
                    }}
                />
            </div>
        </section>
    );
}
