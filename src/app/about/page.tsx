import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About — The Studio",
    description:
        "The story of Beyond The Vow — a luxury wedding planning and design studio built on the conviction that intentionality is the highest form of love.",
};

const values = [
    {
        number: "01",
        title: "Intentionality",
        description:
            "We make no decision without reason. Every flower, every font, every timeline slot is chosen with purpose and aligned to your narrative.",
    },
    {
        number: "02",
        title: "Restraint",
        description:
            "The most powerful weddings are defined as much by what we leave out as what we include. We edit with rigour.",
    },
    {
        number: "03",
        title: "Cultural Fluency",
        description:
            "We have planned weddings across 12 countries and 6 cultural traditions. Nuance is not a checkbox — it is our native language.",
    },
    {
        number: "04",
        title: "Invisible Service",
        description:
            "On your day, our greatest achievement is that you never notice us. We manage every thread, so you feel nothing but joy.",
    },
];

const team = [
    {
        name: "Vivienne Okafor",
        title: "Founder & Creative Director",
        bio: "With a background in fashion editorial and a decade in luxury events, Vivienne founded Beyond The Vow on the conviction that weddings are the most personal art form. She has directed celebrations across four continents.",
        color: "#1A1A2E",
        accent: "#C9A96E",
    },
    {
        name: "Alexandre Renard",
        title: "Lead Planner & Logistics Director",
        bio: "Formerly of the Ritz Paris events team, Alexandre brings an obsessive precision to every logistical architecture. His specialty: making the impossible feel inevitable.",
        color: "#2D1B1B",
        accent: "#E8D5B0",
    },
    {
        name: "Taini Moana",
        title: "Design & Art Direction Lead",
        bio: "A trained interior architect and florist from Auckland, Taini approaches every wedding as a spatial narrative. She is the origin of our signature sculptural tablescapes.",
        color: "#0F1A0F",
        accent: "#8B9E5A",
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
                            "radial-gradient(ellipse at 80% 20%, rgba(55,55,143,0.2) 0%, transparent 60%)",
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
                            08 — About the Studio
                        </p>
                        <h1 className="headline-xl" style={{ color: "var(--white)" }}>
                            We plan<br />
                            <em>with intention,</em><br />
                            design with<br />
                            <em>precision.</em>
                        </h1>
                    </div>
                    <div>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.5)", marginBottom: 48 }}
                        >
                            Beyond The Vow was founded in 2019 on the belief that a wedding should
                            be the most intentional day of your life — not just aesthetically,
                            but emotionally, logistically, and narratively.
                        </p>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                            We are a boutique studio capped at 12 weddings per year. That limit
                            is not a marketing device — it is what allows us to give every couple
                            the singular focus they deserve.
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
                    INTENTIONALITY
                </div>
            </section>

            {/* Philosophy */}
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
                                The Philosophy
                            </p>
                            <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                                Story to<br />Soirée.
                            </h2>
                        </div>
                        <div>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                Every wedding we design begins with a question no one else asks:
                                <em style={{ fontFamily: "var(--font-display)", fontSize: "1.1em" }}>&ldquo;Who are you — truly?&rdquo;</em>
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                Not &ldquo;what are your colors?&rdquo; Not &ldquo;how many guests?&rdquo; We start with your story —
                                how you met, what you value, what makes you laugh. From that foundation,
                                everything else becomes obvious.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)" }}>
                                This is the Beyond The Vow method. It is slower, more personal, and
                                more expensive than convention. It is also, without question, more meaningful.
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

            {/* Team */}
            <section
                id="team"
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--white)",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                        The People
                    </p>
                    <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 80 }}>
                        Meet the<br />
                        <em>studio.</em>
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {team.map((member) => (
                            <div key={member.name}>
                                {/* Photo placeholder */}
                                <div
                                    style={{
                                        width: "100%",
                                        aspectRatio: "3/4",
                                        background: member.color,
                                        marginBottom: 24,
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: `radial-gradient(ellipse at 30% 80%, ${member.accent}20, transparent 60%)`,
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 24,
                                            left: 24,
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: "clamp(20px, 2.5vw, 32px)",
                                                fontWeight: 300,
                                                color: "var(--white)",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {member.name.split(" ")[0]}
                                            <br />
                                            <em>{member.name.split(" ").slice(1).join(" ")}</em>
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className="eyebrow"
                                    style={{ color: "var(--vogue-red)", marginBottom: 12 }}
                                >
                                    {member.title}
                                </p>
                                <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>
                                    {member.bio}
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
                        { value: "12+", label: "Countries" },
                        { value: "500+", label: "Hours per Wedding" },
                        { value: "6", label: "Per Year (Max)" },
                        { value: "100%", label: "Independent Studio" },
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
                        Let us begin<br />
                        <em>your story.</em>
                    </h2>
                    <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 48 }}>
                        Twelve couples per year. One irreplaceable story each time.
                    </p>
                    <Link href="/inquiry" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Start Your Inquiry</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
