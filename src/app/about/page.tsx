import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About — Our Story",
    description:
        "Meet the artist behind Beyond The Vow — a bridal beauty studio dedicated to making every bride feel radiant, confident, and undeniably herself on her wedding day.",
};

const values = [
    {
        number: "01",
        title: "Authenticity",
        description:
            "We create looks that honour who you truly are. Makeup should enhance your natural beauty — not mask it.",
    },
    {
        number: "02",
        title: "Precision",
        description:
            "Every brush stroke is intentional. We take the time to perfect every detail, from liner to highlight.",
    },
    {
        number: "03",
        title: "Inclusivity",
        description:
            "We are trained across all skin tones and textures. Every complexion is celebrated, not accommodated.",
    },
    {
        number: "04",
        title: "Calm Presence",
        description:
            "Wedding mornings are sacred. We bring a calm, professional energy so you can breathe, enjoy, and glow.",
    },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: 100 }}>
            {/* Hero */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px) 0",
                    background: "var(--black)",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at 80% 20%, rgba(180,120,130,0.18) 0%, transparent 60%)",
                    }}
                />
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 80,
                        alignItems: "end",
                        paddingBottom: 100,
                        position: "relative",
                    }}
                >
                    <div>
                        <p
                            className="eyebrow"
                            style={{ color: "rgba(255,255,255,0.25)", marginBottom: 24 }}
                        >
                            About the Studio
                        </p>
                        <h1 className="headline-xl" style={{ color: "var(--white)" }}>
                            Beauty with<br />
                            <em>intention,</em><br />
                            artistry with<br />
                            <em>heart.</em>
                        </h1>
                    </div>
                    <div>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.5)", marginBottom: 48 }}
                        >
                            Beyond The Vow was founded on a single belief: that every person who sits
                            in our chair should leave feeling like the most beautiful version of
                            themselves — not a painted version of someone else.
                        </p>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                            We are a boutique bridal beauty studio serving brides who want intimacy,
                            expertise, and a calm, joyful morning experience on the most important
                            day of their lives.
                        </p>
                    </div>
                </div>

                {/* Large background text */}
                <div
                    aria-hidden
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "20vw",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.02)",
                        lineHeight: 1,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                        textAlign: "center",
                    }}
                >
                    BEYOND THE VOW
                </div>
            </section>

            {/* The Artist */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 100,
                            alignItems: "center",
                        }}
                    >
                        {/* Artist photo placeholder */}
                        <div
                            style={{
                                aspectRatio: "3/4",
                                background: "#1A0E12",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "radial-gradient(ellipse at 30% 80%, rgba(180,120,130,0.2), transparent 60%)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 32,
                                    left: 32,
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(24px, 3vw, 40px)",
                                        fontWeight: 300,
                                        color: "var(--white)",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    The Artist
                                    <br />
                                    <em style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65em" }}>
                                        Beyond The Vow
                                    </em>
                                </p>
                            </div>
                            {/* Artist photo will go here */}
                            <p
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    fontFamily: "var(--font-body)",
                                    fontSize: 10,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.1)",
                                    textAlign: "center",
                                    pointerEvents: "none",
                                    userSelect: "none",
                                }}
                            >
                                Artist photo<br />coming soon
                            </p>
                        </div>

                        <div>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                                The Artist
                            </p>
                            <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 32 }}>
                                A vision built<br />
                                <em>on your story.</em>
                            </h2>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                                With over 7 years of experience in bridal, editorial, and special occasion
                                makeup, our lead artist has had the privilege of working with hundreds of
                                brides across a wide range of skin tones, cultures, and wedding styles.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 24 }}>
                                Trained in airbrush technique, colour theory, and long-wear application,
                                every look is built to last from the first look to the last dance — without
                                ever feeling heavy on the skin.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                                Beyond The Vow was born from a commitment to intimacy and excellence:
                                a studio small enough to care deeply, skilled enough to deliver
                                flawlessly.
                            </p>
                            <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                                <span>Book Your Consultation</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section
                id="philosophy"
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 100,
                            alignItems: "start",
                            marginBottom: 100,
                        }}
                    >
                        <div>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                                Our Philosophy
                            </p>
                            <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                                Face to<br />Flawless.
                            </h2>
                        </div>
                        <div>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                Great bridal makeup starts before a brush is ever picked up. We begin
                                every relationship with a consultation — understanding your skin, your
                                vision, and how you want to feel on your day.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)" }}>
                                We don&apos;t apply the same look to every bride. We listen, we observe,
                                and we craft. The result is always uniquely, unmistakably <em>you</em>.
                            </p>
                        </div>
                    </div>

                    {/* Values grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                        {values.map((v, i) => (
                            <div
                                key={v.number}
                                style={{
                                    padding: "40px 32px",
                                    background: i === 1 ? "var(--black)" : "var(--white)",
                                    border: i !== 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                                }}
                            >
                                <p
                                    className="eyebrow"
                                    style={{
                                        color: i === 1 ? "var(--vogue-red)" : "var(--light-grey)",
                                        marginBottom: 20,
                                    }}
                                >
                                    {v.number}
                                </p>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 24,
                                        fontWeight: 400,
                                        color: i === 1 ? "var(--white)" : "var(--black)",
                                        marginBottom: 12,
                                    }}
                                >
                                    {v.title}
                                </h3>
                                <p
                                    className="body-sm"
                                    style={{
                                        color: i === 1 ? "rgba(255,255,255,0.45)" : "var(--midnight-grey)",
                                    }}
                                >
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials strip */}
            <section
                style={{
                    padding: "80px clamp(24px,5vw,100px)",
                    background: "var(--black)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 40,
                    }}
                >
                    {[
                        { value: "100+", label: "Brides Served" },
                        { value: "7+", label: "Years Experience" },
                        { value: "All", label: "Skin Tones" },
                        { value: "100%", label: "Bespoke Looks" },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(48px, 5vw, 80px)",
                                    fontWeight: 300,
                                    color: "var(--white)",
                                    lineHeight: 1,
                                    marginBottom: 8,
                                }}
                            >
                                {stat.value}
                            </p>
                            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)" }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 24 }}>
                        Let us celebrate<br />
                        <em>your beauty.</em>
                    </h2>
                    <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                        Every bride deserves to feel extraordinary. Let&apos;s talk about your vision.
                    </p>
                    <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Book a Consultation</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
