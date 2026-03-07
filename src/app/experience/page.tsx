import type { Metadata } from "next";
import Link from "next/link";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
    title: "The Experience — Our Process",
    description:
        "An intimate look at the Beyond The Vow process — from discovery call to final farewell. Over 500 hours, meticulously orchestrated.",
};

export default function ExperiencePage() {
    return (
        <div style={{ paddingTop: 100 }}>
            {/* Hero */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px) 120px",
                    background: "var(--pale)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 80,
                            alignItems: "end",
                        }}
                    >
                        <div>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                                04 — The Experience
                            </p>
                            <h1 className="headline-xl" style={{ color: "var(--black)" }}>
                                500+ hours<br />
                                <em>of care.</em>
                            </h1>
                        </div>
                        <div>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 32 }}>
                                The number 500 is not a marketing claim. It is a documented reality —
                                the minimum number of studio hours that goes into every wedding we design.
                                Here is how we spend them.
                            </p>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 24,
                                }}
                            >
                                {[
                                    { phase: "Discovery & Vision", hours: "20h" },
                                    { phase: "Design & Concepting", hours: "80h" },
                                    { phase: "Vendor Curation", hours: "100h" },
                                    { phase: "Production & Logistics", hours: "200h" },
                                    { phase: "Day-of Coordination", hours: "60h" },
                                    { phase: "Post-Event Wrap", hours: "40h" },
                                ].map((item) => (
                                    <div key={item.phase}>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: 28,
                                                fontWeight: 300,
                                                color: "var(--black)",
                                                lineHeight: 1,
                                                marginBottom: 4,
                                            }}
                                        >
                                            {item.hours}
                                        </p>
                                        <p className="eyebrow" style={{ color: "var(--light-grey)" }}>
                                            {item.phase}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Timeline */}
            <Timeline />

            {/* AI Tools */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ marginBottom: 80 }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
                            Exclusive Client Tools
                        </p>
                        <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                            Precision-built<br />
                            <em>for your vision.</em>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
                        {[
                            {
                                icon: "◈",
                                title: "AI Timeline Builder",
                                description:
                                    "Generate a venue-specific day-of timeline calibrated to your location's golden hour, sunset, and travel logistics.",
                                tag: "Included with Full Planning",
                                dark: true,
                            },
                            {
                                icon: "◇",
                                title: "AI Budget Forecaster",
                                description:
                                    "Input your guest count, location, and aesthetic — receive a personalised budget breakdown with design alternatives and dupes.",
                                tag: "Free to use",
                                dark: false,
                            },
                            {
                                icon: "◉",
                                title: "Digital Guest Hub",
                                description:
                                    "A private, branded microsite for your guests: hotel blocks, itineraries, RSVPs, dietary requirements, and real-time QR photo sharing.",
                                tag: "Included with Full Planning",
                                dark: false,
                            },
                        ].map((tool) => (
                            <div
                                key={tool.title}
                                style={{
                                    background: tool.dark ? "var(--black)" : "var(--pale)",
                                    padding: "52px 40px",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 32,
                                        color: tool.dark ? "var(--vogue-red)" : "var(--midnight-grey)",
                                        marginBottom: 24,
                                    }}
                                >
                                    {tool.icon}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(22px, 2.5vw, 36px)",
                                        fontWeight: 300,
                                        color: tool.dark ? "var(--white)" : "var(--black)",
                                        marginBottom: 16,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {tool.title}
                                </h3>
                                <p
                                    className="body-sm"
                                    style={{
                                        color: tool.dark ? "rgba(255,255,255,0.45)" : "var(--midnight-grey)",
                                        marginBottom: 32,
                                    }}
                                >
                                    {tool.description}
                                </p>
                                <p
                                    className="eyebrow"
                                    style={{
                                        color: tool.dark ? "var(--vogue-red)" : "var(--light-grey)",
                                    }}
                                >
                                    {tool.tag}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--black)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 className="headline-lg" style={{ color: "var(--white)", marginBottom: 24 }}>
                        Experience it<br />
                        <em>for yourself.</em>
                    </h2>
                    <p className="body-lg" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>
                        The first consultation is always at our invitation — no agenda, no
                        contracts. Just a conversation.
                    </p>
                    <Link href="/inquiry" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Schedule a Consultation</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
