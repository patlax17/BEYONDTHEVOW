import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Bridal Makeup — Services",
    description:
        "Explore our full range of bridal beauty services — from full bridal packages and bridesmaids glam to airbrush finishes and editorial looks. Crafted for every bride.",
};

const packages = [
    {
        id: "01",
        name: "The Bridal Package",
        tagline: "Complete wedding day artistry",
        price: "Starting from $XXX",
        description:
            "Our signature offering, designed for the bride who wants nothing left to chance. Includes a pre-wedding trial, full-day application, and an on-site touch-up kit to carry you through to midnight.",
        includes: [
            "90-minute bridal makeup trial",
            "Wedding day application (3 hrs)",
            "Long-wear setting service",
            "Touch-up kit to keep",
            "Custom look build based on your vision",
            "Available for on-site or studio sessions",
        ],
        highlight: true,
    },
    {
        id: "02",
        name: "Trial Only",
        tagline: "Perfect for planning ahead",
        price: "Starting from $XXX",
        description:
            "Not ready to commit to the full package yet? Book a standalone trial to explore your vision, test skin compatibility, and see exactly how you'll look on the day.",
        includes: [
            "90-minute consultation & trial",
            "Full look build & wear test",
            "Style guidance & mood boarding",
            "Photo reference provided",
        ],
        highlight: false,
    },
    {
        id: "03",
        name: "Bridesmaids & Party",
        tagline: "Coordinated glam for your whole crew",
        price: "Starting from $XXX per person",
        description:
            "Elevate your bridal party with a cohesive, polished look. Group bookings include dedicated scheduling to ensure everyone is camera-ready before the ceremony.",
        includes: [
            "Minimum 2 people",
            "Coordinated aesthetic across the group",
            "Flexible morning scheduling",
            "Long-wear, all-day formula",
            "Group discount applied",
        ],
        highlight: false,
    },
    {
        id: "04",
        name: "Airbrush Upgrade",
        tagline: "Ultra-smooth, camera-ready finish",
        price: "Add-on to any package",
        description:
            "Available as an upgrade to any booking, airbrush application delivers an impossibly smooth, photograph-perfect finish that wears beautifully all day.",
        includes: [
            "Professional airbrush system",
            "Customised to your skin tone",
            "HD photo & video ready",
            "Buildable coverage",
            "Long-lasting formula",
        ],
        highlight: false,
    },
];

const faqs = [
    {
        question: "When should I book my trial?",
        answer:
            "We recommend booking your trial 2–4 months before the wedding. This gives us time to refine the look and make any adjustments before the big day.",
    },
    {
        question: "How long will my makeup last?",
        answer:
            "With our long-wear setting technique, your look is designed to last 12–14 hours. Airbrush applications typically last even longer.",
    },
    {
        question: "Do you travel to the venue?",
        answer:
            "Yes — we offer on-location services throughout the area. Travel fees may apply depending on the distance. Ask us when you book.",
    },
    {
        question: "What should I bring to my trial?",
        answer:
            "Bring any inspiration images, a top you can easily remove, and come with a clean, moisturised face. If you have your veil or accessories, bring those too!",
    },
    {
        question: "Do you work on all skin tones?",
        answer:
            "Absolutely. We are trained across the full spectrum of complexions and carry a comprehensive range of foundations, concealers, and products suited for all tones.",
    },
    {
        question: "How far in advance should I book?",
        answer:
            "Bridal dates fill up fast — especially on peak wedding weekends. We recommend securing your date as soon as possible, ideally 6–12 months ahead.",
    },
];

export default function BridalMakeupPage() {
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
                            "radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.12) 0%, transparent 55%)",
                    }}
                />
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        paddingBottom: 100,
                        position: "relative",
                    }}
                >
                    <p
                        className="eyebrow"
                        style={{ color: "rgba(255,255,255,0.25)", marginBottom: 24 }}
                    >
                        Bridal Makeup
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                            gap: 80,
                            alignItems: "end",
                        }}
                    >
                        <h1 className="headline-xl" style={{ color: "var(--white)" }}>
                            Artistry for<br />
                            <em>the most important</em><br />
                            morning of your life.
                        </h1>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.45)", alignSelf: "end" }}
                        >
                            Every package is tailored to your vision, your skin, and the story
                            you want to tell on your wedding day.
                        </p>
                    </div>
                </div>

                {/* Large background text */}
                <div
                    aria-hidden
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "18vw",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.02)",
                        lineHeight: 1,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                    }}
                >
                    BRIDAL
                </div>
            </section>

            {/* Packages */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                }}
                aria-label="Bridal Packages"
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ marginBottom: 80 }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
                            Our Packages
                        </p>
                        <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                            Choose your<br />
                            <em>perfect package.</em>
                        </h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {packages.map((pkg, i) => (
                            <div
                                key={pkg.id}
                                style={{
                                    background: pkg.highlight ? "var(--black)" : "var(--white)",
                                    padding: "60px clamp(32px,4vw,80px)",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 2fr 1fr",
                                    gap: 60,
                                    alignItems: "start",
                                    position: "relative",
                                }}
                            >
                                {/* Package number watermark */}
                                <span
                                    aria-hidden
                                    style={{
                                        position: "absolute",
                                        top: 20,
                                        right: 40,
                                        fontFamily: "var(--font-display)",
                                        fontSize: 100,
                                        fontWeight: 300,
                                        color: pkg.highlight ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                                        lineHeight: 1,
                                        userSelect: "none",
                                    }}
                                >
                                    {pkg.id}
                                </span>

                                {/* Left: Name & Tagline */}
                                <div>
                                    <p
                                        className="eyebrow"
                                        style={{
                                            color: pkg.highlight ? "var(--vogue-red)" : "var(--light-grey)",
                                            marginBottom: 16,
                                        }}
                                    >
                                        {pkg.id}
                                    </p>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(24px, 2.5vw, 40px)",
                                            fontWeight: 400,
                                            color: pkg.highlight ? "var(--white)" : "var(--black)",
                                            lineHeight: 1.1,
                                            marginBottom: 12,
                                        }}
                                    >
                                        {pkg.name}
                                    </h3>
                                    <p
                                        className="eyebrow"
                                        style={{
                                            color: pkg.highlight ? "rgba(255,255,255,0.35)" : "var(--light-grey)",
                                        }}
                                    >
                                        {pkg.tagline}
                                    </p>
                                </div>

                                {/* Centre: Description + Includes */}
                                <div>
                                    <p
                                        className="body-lg"
                                        style={{
                                            color: pkg.highlight ? "rgba(255,255,255,0.6)" : "var(--midnight-grey)",
                                            marginBottom: 32,
                                        }}
                                    >
                                        {pkg.description}
                                    </p>
                                    <ul
                                        style={{
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 10,
                                        }}
                                    >
                                        {pkg.includes.map((item) => (
                                            <li
                                                key={item}
                                                style={{
                                                    fontFamily: "var(--font-body)",
                                                    fontSize: 13,
                                                    fontWeight: 300,
                                                    color: pkg.highlight
                                                        ? "rgba(255,255,255,0.45)"
                                                        : "var(--midnight-grey)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        width: 4,
                                                        height: 4,
                                                        borderRadius: "50%",
                                                        background: pkg.highlight
                                                            ? "var(--vogue-red)"
                                                            : "var(--light-grey)",
                                                        display: "inline-block",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right: Price & CTA */}
                                <div style={{ textAlign: "right" }}>
                                    <p
                                        className="eyebrow"
                                        style={{
                                            color: pkg.highlight ? "rgba(255,255,255,0.3)" : "var(--light-grey)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        Pricing
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(20px,2vw,32px)",
                                            fontWeight: 300,
                                            color: pkg.highlight ? "var(--white)" : "var(--black)",
                                            marginBottom: 32,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {pkg.price}
                                    </p>
                                    <Link
                                        href="/consultation"
                                        className={pkg.highlight ? "btn-primary" : "btn-outline"}
                                        style={{ display: "inline-flex", padding: "12px 28px", fontSize: 10 }}
                                    >
                                        <span>Book Now</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Strip */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                }}
                aria-label="Our Process"
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ marginBottom: 80, textAlign: "center" }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
                            How It Works
                        </p>
                        <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                            Simple from<br />
                            <em>start to &ldquo;I do.&rdquo;</em>
                        </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
                        {[
                            {
                                step: "01",
                                title: "Inquiry",
                                desc: "Reach out via our consultation form with your date, vision, and party size.",
                            },
                            {
                                step: "02",
                                title: "Consultation",
                                desc: "We connect to discuss your vision, skin type, and inspirations in depth.",
                            },
                            {
                                step: "03",
                                title: "Trial",
                                desc: "Your trial session — we build and refine the look together until it's perfect.",
                            },
                            {
                                step: "04",
                                title: "Wedding Day",
                                desc: "We arrive, we create, we make you radiant. You enjoy every moment.",
                            },
                        ].map((s, i) => (
                            <div
                                key={s.step}
                                style={{
                                    padding: "48px 36px",
                                    background: i === 2 ? "var(--black)" : "var(--pale)",
                                    position: "relative",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 80,
                                        fontWeight: 300,
                                        color: i === 2 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                                        position: "absolute",
                                        top: 16,
                                        right: 20,
                                        lineHeight: 1,
                                        userSelect: "none",
                                    }}
                                >
                                    {s.step}
                                </p>
                                <p
                                    className="eyebrow"
                                    style={{
                                        color: i === 2 ? "var(--vogue-red)" : "var(--light-grey)",
                                        marginBottom: 16,
                                    }}
                                >
                                    {s.step}
                                </p>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 28,
                                        fontWeight: 400,
                                        color: i === 2 ? "var(--white)" : "var(--black)",
                                        marginBottom: 12,
                                    }}
                                >
                                    {s.title}
                                </h3>
                                <p
                                    className="body-sm"
                                    style={{
                                        color: i === 2 ? "rgba(255,255,255,0.45)" : "var(--midnight-grey)",
                                    }}
                                >
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                }}
                aria-label="Frequently Asked Questions"
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 2fr",
                            gap: 100,
                        }}
                    >
                        <div>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                                FAQ
                            </p>
                            <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 40 }}>
                                Questions,<br />
                                <em>answered.</em>
                            </h2>
                            <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                                <span>Still have questions?</span>
                            </Link>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {faqs.map((faq, i) => (
                                <div
                                    key={faq.question}
                                    style={{
                                        borderBottom: "1px solid rgba(0,0,0,0.08)",
                                        padding: "32px 0",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "clamp(18px, 1.8vw, 26px)",
                                            fontWeight: 400,
                                            color: "var(--black)",
                                            marginBottom: 12,
                                        }}
                                    >
                                        {faq.question}
                                    </p>
                                    <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                style={{
                    background: "var(--black)",
                    padding: "160px clamp(24px,5vw,100px)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 32 }}>
                        Your Day Awaits
                    </p>
                    <h2 className="headline-xl" style={{ color: "var(--white)", marginBottom: 32 }}>
                        Secure your date<br />
                        <em>before it&apos;s gone.</em>
                    </h2>
                    <p
                        className="body-lg"
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            maxWidth: 480,
                            margin: "0 auto 60px",
                        }}
                    >
                        Peak wedding dates book up fast. Start your consultation today to
                        reserve your spot.
                    </p>
                    <Link
                        href="/consultation"
                        className="btn-primary"
                        style={{ display: "inline-flex" }}
                    >
                        <span>Book a Consultation</span>
                        <span style={{ fontSize: 18 }}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
