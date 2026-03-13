"use client";

import { useRef, useState } from "react";

const portfolioItems = [
    {
        id: 1,
        title: "Anya & Khalil",
        location: "Amalfi Coast, Italy",
        category: "Destination Wedding",
        year: "2025",
        description:
            "A three-day celebration across three Amalfi villages, featuring a 40-piece ensemble and bespoke helicopter-transported florals.",
        image: "/wedding-01.jpg",
    },
    {
        id: 2,
        title: "Solène & Marcus",
        location: "Château de Vaux, Paris",
        category: "Full Planning & Design",
        year: "2025",
        description:
            "A 17th-century château venue featuring sculptural florals and black-tie formality for 180 international guests.",
        image: "/wedding-02.jpg",
    },
    {
        id: 3,
        title: "Yemi & Adaeze",
        location: "Lagos & London",
        category: "Cultural Fusion",
        year: "2024",
        description:
            "A seamless integration of Yoruba tradition and London couture, creating a coherent visual narrative across two continents.",
        image: "/wedding-03.jpg",
    },
    {
        id: 4,
        title: "Isabelle & Drew",
        location: "Santorini, Greece",
        category: "Intimate Celebration",
        year: "2024",
        description:
            "An intimate clifftop ceremony for 24 guests, featuring sustainable local decor that complemented the natural Aegean landscape.",
        image: "/wedding-04.jpg",
    },
    {
        id: 5,
        title: "Priya & Sebastian",
        location: "Udaipur, India",
        category: "Palace Wedding",
        year: "2024",
        description:
            "Five events, five days, 350 guests, a lakeside palace, and the most complex floristry brief we have ever loved.",
        image: "/wedding-05.jpg",
    },
];

export default function Portfolio() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
        setScrollLeft(trackRef.current?.scrollLeft ?? 0);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !trackRef.current) return;
        e.preventDefault();
        const x = e.pageX - (trackRef.current.offsetLeft ?? 0);
        const walk = (x - startX) * 1.4;
        trackRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopDrag = () => setIsDragging(false);

    return (
        <section
            aria-label="Portfolio"
            style={{ background: "var(--black)", overflow: "hidden" }}
        >
            {/* Header */}
            <div
                style={{
                    padding: "100px clamp(24px,5vw,100px) 60px",
                    maxWidth: 1440,
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}
            >
                <div>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 12 }}>
                        03 / Portfolio
                    </p>
                    <h2 className="headline-lg" style={{ color: "var(--white)" }}>
                        Stories we&apos;ve<br />
                        <em>had the honour to tell.</em>
                    </h2>
                </div>
                <a
                    href="/portfolio"
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.2)",
                        padding: "12px 28px",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#fff";
                        el.style.borderColor = "rgba(255,255,255,0.6)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "rgba(255,255,255,0.4)";
                        el.style.borderColor = "rgba(255,255,255,0.2)";
                    }}
                >
                    View All Work
                </a>
            </div>

            {/* Drag hint */}
            <p
                className="eyebrow"
                style={{
                    color: "rgba(255,255,255,0.18)",
                    padding: "0 clamp(24px,5vw,100px) 24px",
                }}
            >
                Drag to explore →
            </p>

            {/* Scrollable track */}
            <div
                ref={trackRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                style={{
                    display: "flex",
                    gap: 3,
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    cursor: isDragging ? "grabbing" : "grab",
                    paddingBottom: 80,
                    paddingLeft: "clamp(24px,5vw,100px)",
                    paddingRight: "clamp(24px,5vw,100px)",
                    userSelect: "none",
                }}
            >
                {portfolioItems.map((item) => (
                    <div
                        key={item.id}
                        onMouseEnter={() => setActiveItem(item.id)}
                        onMouseLeave={() => setActiveItem(null)}
                        style={{
                            flexShrink: 0,
                            width: "clamp(280px, 32vw, 480px)",
                            position: "relative",
                            cursor: "pointer",
                        }}
                    >
                        {/* Image */}
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "3/4",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.image}
                                alt={`${item.title} wedding photography`}
                                draggable={false}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                    transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                                    transform: activeItem === item.id ? "scale(1.04)" : "scale(1)",
                                }}
                            />
                            {/* Overlay on hover */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)",
                                    opacity: activeItem === item.id ? 1 : 0,
                                    transition: "opacity 0.4s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    padding: 28,
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: 9,
                                        fontWeight: 500,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.7)",
                                        marginBottom: 8,
                                    }}
                                >
                                    View Story →
                                </p>
                                <p
                                    className="body-sm"
                                    style={{ color: "rgba(255,255,255,0.65)", fontSize: 12 }}
                                >
                                    {item.description}
                                </p>
                            </div>

                            {/* Index number */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    left: 16,
                                    fontFamily: "var(--font-display)",
                                    fontSize: 72,
                                    fontWeight: 300,
                                    color: "rgba(255,255,255,0.06)",
                                    lineHeight: 1,
                                    userSelect: "none",
                                }}
                            >
                                0{item.id}
                            </div>
                        </div>

                        {/* Caption */}
                        <div style={{ padding: "20px 0" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(18px, 2vw, 26px)",
                                            fontWeight: 300,
                                            color: "var(--white)",
                                            lineHeight: 1.1,
                                            marginBottom: 4,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>
                                        {item.location}
                                    </p>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 2 }}>
                                        {item.category}
                                    </p>
                                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.2)" }}>
                                        {item.year}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
