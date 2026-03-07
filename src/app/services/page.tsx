import type { Metadata } from "next";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import StyleQuiz from "@/components/StyleQuiz";

export const metadata: Metadata = {
    title: "Services — The Bespoke Journey",
    description:
        "Full Wedding Planning, Design Direction, and International Destination services. Every engagement is bespoke, every detail intentional.",
};

const services = [
    {
        id: "full-planning",
        number: "01",
        title: "Full Planning & Design",
        tagline: "The Complete Vision",
        description:
            "Our most comprehensive offering. We partner with you from the very first concept to the final farewell — managing every detail, every vendor, every logistical variable so that you never have to.",
        scope: [
            "12–18 month engagement",
            "Comprehensive budget architecture",
            "Global vendor curation & negotiation",
            "Full design concept & art direction",
            "Guest experience design",
            "On-site team (full wedding weekend)",
            "Post-wedding follow-up & settlements",
            "Digital guest hub access",
        ],
        starting: "From $75,000",
        availability: "Limited to 6 weddings per year",
        bg: "#0A0A0A",
    },
    {
        id: "design",
        number: "02",
        title: "Design Direction",
        tagline: "The Aesthetic Vision",
        description:
            "You have a planner. You need a visionary. We step in as your creative director — concepting your wedding's entire aesthetic language with precision and intentionality.",
        scope: [
            "Full aesthetic concept development",
            "Visual direction presentation",
            "Detailed design specification documents",
            "Vendor art direction briefs",
            "Stationery & collateral direction",
            "Day-of visual oversight",
        ],
        starting: "From $35,000",
        availability: "12 engagements per year",
        bg: "#111111",
    },
    {
        id: "destination",
        number: "03",
        title: "Destination & International",
        tagline: "The Global Vision",
        description:
            "We are native to complexity. Whether Capri or Cartagena — we navigate foreign venues, cultures, logistics, and languages so your wedding feels effortlessly local.",
        scope: [
            "Multi-country coordination",
            "Local vendor partnerships (12+ countries)",
            "Guest travel & hotel block management",
            "Cultural ceremony integration",
            "Legal requirements & documentation",
            "Emergency contingency protocols",
        ],
        starting: "From $95,000",
        availability: "8 destination engagements per year",
        bg: "#0D0D0D",
    },
];

export default function ServicesPage() {
    return (
        <div style={{ paddingTop: 100 }}>
            {/* Header */}
            <section
                style={{
                    padding: "80px clamp(24px,5vw,100px) 100px",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
                        <div>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                                02 — Services
                            </p>
                            <h1 className="headline-xl" style={{ color: "var(--black)" }}>
                                The Bespoke<br />
                                <em>Journey.</em>
                            </h1>
                        </div>
                        <div>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 32 }}>
                                We offer three distinct paths — each designed to meet you exactly where your vision
                                lives. Every engagement is fully bespoke. Every detail, intentional.
                            </p>
                            <Link href="/inquiry" className="btn-primary">
                                <span>Begin Your Inquiry</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            {services.map((service, i) => (
                <section
                    key={service.id}
                    id={service.id}
                    style={{
                        padding: "100px clamp(24px,5vw,100px)",
                        background: i % 2 === 0 ? "var(--black)" : "var(--pale)",
                        color: i % 2 === 0 ? "var(--white)" : "var(--black)",
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1440,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1.5fr",
                            gap: 100,
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <p
                                className="eyebrow"
                                style={{
                                    color: i % 2 === 0 ? "var(--vogue-red)" : "var(--light-grey)",
                                    marginBottom: 16,
                                }}
                            >
                                {service.number} — {service.tagline}
                            </p>
                            <h2
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(36px, 4vw, 64px)",
                                    fontWeight: 300,
                                    color: i % 2 === 0 ? "var(--white)" : "var(--black)",
                                    lineHeight: 1.05,
                                    marginBottom: 24,
                                }}
                            >
                                {service.title}
                            </h2>
                            <p
                                className="body-lg"
                                style={{
                                    color: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "var(--midnight-grey)",
                                    marginBottom: 40,
                                }}
                            >
                                {service.description}
                            </p>
                            <div style={{ marginBottom: 40 }}>
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(24px, 2.5vw, 40px)",
                                        fontWeight: 300,
                                        color: i % 2 === 0 ? "var(--white)" : "var(--black)",
                                        marginBottom: 4,
                                    }}
                                >
                                    {service.starting}
                                </p>
                                <p
                                    className="eyebrow"
                                    style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.25)" : "var(--light-grey)" }}
                                >
                                    {service.availability}
                                </p>
                            </div>
                            <Link
                                href="/inquiry"
                                className={i % 2 === 0 ? "btn-primary" : "btn-outline"}
                            >
                                <span>Inquire About This</span>
                            </Link>
                        </div>
                        <div>
                            <p
                                className="eyebrow"
                                style={{
                                    color: i % 2 === 0 ? "rgba(255,255,255,0.25)" : "var(--light-grey)",
                                    marginBottom: 28,
                                }}
                            >
                                What&apos;s Included
                            </p>
                            <ul
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0,
                                }}
                            >
                                {service.scope.map((item, si) => (
                                    <li
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 20,
                                            padding: "18px 0",
                                            borderBottom: `1px solid ${i % 2 === 0 ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"}`,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: 11,
                                                color: i % 2 === 0 ? "rgba(255,255,255,0.15)" : "var(--light-grey)",
                                                minWidth: 28,
                                            }}
                                        >
                                            {String(si + 1).padStart(2, "0")}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: 14,
                                                fontWeight: 300,
                                                color: i % 2 === 0 ? "rgba(255,255,255,0.65)" : "var(--midnight-grey)",
                                            }}
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

            {/* Timeline */}
            <Timeline />

            {/* CTA */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 24 }}>
                        Not sure which path is right?
                    </h2>
                    <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                        Every inquiry begins with a consultation, not a commitment.
                        Let&apos;s talk about your vision first.
                    </p>
                    <Link href="/inquiry" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Schedule a Discovery Call</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
