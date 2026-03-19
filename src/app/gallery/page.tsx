"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
// Metadata not used in client components — kept for reference

const galleryImages = [
    {
        id: 1,
        src: "/gallery/IMG_4009.png",
        caption: "A Divine Union",
        description: "The timeless elegance of a couple coming together, coordinated to perfection.",
        category: "Portraits",
    },
    {
        id: 2,
        src: "/gallery/IMG_4011.png",
        caption: "Soft Glamour",
        description: "Effortless skin and a radiant finish for the modern bride.",
        category: "Bridal Glow",
    },
    {
        id: 3,
        src: "/gallery/IMG_4171.png",
        caption: "Dramatic Silhouette",
        description: "The grand entrance: architecture meets artistry in this bridal look.",
        category: "Portraits",
    },
    {
        id: 4,
        src: "/gallery/IMG_4175.png",
        caption: "Serene Sophistication",
        description: "A moment of calm and composure in the bridal suite.",
        category: "Bridal Glow",
    },
    {
        id: 5,
        src: "/gallery/IMG_4179.png",
        caption: "Ethereal Beauty",
        description: "Sweeping trains and romantic lighting define the bridal experience.",
        category: "Bridal Glow",
    },
    {
        id: 6,
        src: "/gallery/IMG_4401.png",
        caption: "The Grand Tablescape",
        description: "Tall tapers and lush florals set the stage for an unforgettable evening.",
        category: "Design & Decor",
    },
    {
        id: 7,
        src: "/gallery/IMG_4404.png",
        caption: "Unveiling the Vision",
        description: "The bride steps into the meticulously curated celebration.",
        category: "Portraits",
    },
    {
        id: 8,
        src: "/gallery/IMG_4409.png",
        caption: "Candlelit Ambience",
        description: "Intimate seating arrangements designed with warmth and elegance.",
        category: "Design & Decor",
    },
    {
        id: 9,
        src: "/gallery/IMG_4413.png",
        caption: "Floral Artistry",
        description: "Bespoke centerpieces that bring the outdoors inside.",
        category: "Design & Decor",
    },
    {
        id: 10,
        src: "/gallery/IMG_4414.png",
        caption: "Emerald & Gold",
        description: "A rich, velvet palette for a regal reception dinner.",
        category: "Design & Decor",
    },
    {
        id: 11,
        src: "/gallery/IMG_4416.png",
        caption: "Crystal Clarity",
        description: "Every glassware selection contributes to the luxury experience.",
        category: "Design & Decor",
    },
    {
        id: 12,
        src: "/gallery/IMG_4417.png",
        caption: "Details of Distinction",
        description: "Customized menus and place settings for every guest.",
        category: "Design & Decor",
    },
    {
        id: 13,
        src: "/gallery/IMG_4422.png",
        caption: "Verdant Luxury",
        description: "Layered textures and greenery for a contemporary organic feel.",
        category: "Design & Decor",
    },
    {
        id: 14,
        src: "/gallery/IMG_4423.png",
        caption: "The Showstopper",
        description: "A multi-tiered masterpiece, accented with gold leaf and florals.",
        category: "Design & Decor",
    },
    {
        id: 15,
        src: "/gallery/IMG_4424.png",
        caption: "Exquisite Accents",
        description: "From the first bloom to the last candle, every detail matters.",
        category: "Design & Decor",
    },
];

const categories = ["All", "Bridal Glow", "Design & Decor", "Portraits"];

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
