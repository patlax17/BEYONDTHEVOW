"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
// Metadata not used in client components — kept for reference

const galleryImages = [
    {
        id: 1,
        src: "/wedding-01.jpg",
        caption: "Soft Glam",
        description: "A luminous, skin-first look with warm bronze tones.",
        category: "Soft Glam",
    },
    {
        id: 2,
        src: "/wedding-02.jpg",
        caption: "Classic Bridal",
        description: "A timeless, elegant look with defined brows and a soft lip.",
        category: "Classic",
    },
    {
        id: 3,
        src: "/wedding-03.jpg",
        caption: "Bold & Radiant",
        description: "A statement look with dramatic eyes and dewy skin.",
        category: "Editorial",
    },
    {
        id: 4,
        src: "/wedding-04.jpg",
        caption: "Airbrush Finish",
        description: "Camera-ready perfection with an ultra-smooth airbrush base.",
        category: "Airbrush",
    },
    {
        id: 5,
        src: "/wedding-05.jpg",
        caption: "Golden Hour Glow",
        description: "A sun-kissed, bronzed palette perfectly matched to the light.",
        category: "Soft Glam",
    },
    {
        id: 6,
        src: "/wedding-01.jpg",
        caption: "Romantic Flush",
        description: "Blush-forward and delicate — a bloom of colour on effortless skin.",
        category: "Classic",
    },
    {
        id: 7,
        src: "/wedding-02.jpg",
        caption: "Sculpted Couture",
        description: "Editorial contouring meets bridal elegance.",
        category: "Editorial",
    },
    {
        id: 8,
        src: "/wedding-03.jpg",
        caption: "Velvet Eyes",
        description: "Deep, smoky eyes softened by a barely-there lip.",
        category: "Editorial",
    },
    {
        id: 9,
        src: "/wedding-04.jpg",
        caption: "Dewy Dawn",
        description: "Fresh skin with the gentlest flush — a morning in bloom.",
        category: "Soft Glam",
    },
];

const categories = ["All", "Soft Glam", "Classic", "Editorial", "Airbrush"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);

    const filtered =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <div>
            <PageHeader
                eyebrow="Gallery"
                title={<>Every look,<br /><em>a love story.</em></>}
                subtitle="Browse our collection of bridal looks — each one crafted to honour the individual beauty of the person in the chair."
            />

            {/* Category Filter */}
            <section
                style={{
                    padding: "48px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    position: "sticky",
                    top: 130,
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    <span className="eyebrow" style={{ color: "var(--light-grey)", marginRight: 12 }}>
                        Filter:
                    </span>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: 10,
                                fontWeight: 500,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                padding: "10px 24px",
                                border: "1px solid",
                                borderColor: activeCategory === cat ? "var(--black)" : "rgba(0,0,0,0.15)",
                                background: activeCategory === cat ? "var(--black)" : "transparent",
                                color: activeCategory === cat ? "var(--white)" : "var(--midnight-grey)",
                                cursor: "pointer",
                                transition: "all 0.25s ease",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section
                style={{
                    padding: "60px clamp(24px,5vw,100px) 120px",
                    background: "var(--pale)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        columns: "3 300px",
                        gap: 4,
                    }}
                >
                    {filtered.map((img) => (
                        <div
                            key={img.id}
                            onClick={() => setLightboxImage(img)}
                            style={{
                                breakInside: "avoid",
                                marginBottom: 4,
                                position: "relative",
                                overflow: "hidden",
                                cursor: "pointer",
                                display: "block",
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={img.src}
                                alt={img.caption}
                                style={{
                                    width: "100%",
                                    display: "block",
                                    transition: "transform 0.6s ease",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
                                }
                            />
                            {/* Hover overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(0,0,0,0)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    padding: 24,
                                    transition: "background 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.45)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0)";
                                }}
                            >
                                <p
                                    className="eyebrow"
                                    style={{ color: "rgba(255,255,255,0.9)", marginBottom: 4 }}
                                >
                                    {img.caption}
                                </p>
                                <p
                                    className="body-sm"
                                    style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}
                                >
                                    {img.description}
                                </p>
                            </div>
                        </div>
                    ))}
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
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 24 }}>
                        Ready for yours?
                    </p>
                    <h2 className="headline-lg" style={{ color: "var(--white)", marginBottom: 24 }}>
                        Let us create<br />
                        <em>your moment.</em>
                    </h2>
                    <p
                        className="body-lg"
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            maxWidth: 400,
                            margin: "0 auto 48px",
                        }}
                    >
                        Your look starts with a consultation. Let&apos;s talk.
                    </p>
                    <a href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Book a Consultation</span>
                        <span style={{ fontSize: 18 }}>→</span>
                    </a>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    onClick={() => setLightboxImage(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.92)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "40px",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "relative",
                            maxWidth: "min(90vw, 800px)",
                            maxHeight: "90vh",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={lightboxImage.src}
                            alt={lightboxImage.caption}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "80vh",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                        <div style={{ padding: "20px 0 0" }}>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 8 }}>
                                {lightboxImage.category}
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: 24,
                                    fontWeight: 300,
                                    color: "var(--white)",
                                    marginBottom: 4,
                                }}
                            >
                                {lightboxImage.caption}
                            </p>
                            <p className="body-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                                {lightboxImage.description}
                            </p>
                        </div>
                        <button
                            onClick={() => setLightboxImage(null)}
                            style={{
                                position: "absolute",
                                top: -48,
                                right: 0,
                                background: "none",
                                border: "none",
                                color: "rgba(255,255,255,0.6)",
                                fontSize: 28,
                                cursor: "pointer",
                                lineHeight: 1,
                                transition: "color 0.2s ease",
                            }}
                            aria-label="Close lightbox"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
