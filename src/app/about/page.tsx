import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "About / Meet the Team | Beyond the Vow",
    description: "Meet Maryleen and Natalie, the co-founders of Beyond the Vow—a professional bridal makeup artist and event design specialist who together curate the ultimate wedding day experience.",
};

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                eyebrow="About Us"
                title={<>Not Just Coordinators.<br /><em>Your Bridal Dream Team.</em></>}
                subtitle="We bring a rare combination of artistry, organization, and luxury service that most coordinators simply cannot offer."
            />

            {/* INTRO */}
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
                        className="btv-about-intro-grid"
                    >
                        <div>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 32, letterSpacing: "0.25em" }}>
                                Our Story
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                Beyond the Vow was founded upon a core belief: that modern brides deserve more than traditional coordination.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                They deserve <em>a team.</em>
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                A team that understands timelines, beauty, details, decor, energy, and the emotions of the day.
                            </p>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 28 }}>
                                Founded by a professional bridal makeup artist with over 10 years of experience in weddings, television production, and celebrity glam, and partnered with an expert in event planning and design, we bring a rare combination of artistry, organization, and luxury service that most coordinators simply cannot offer.
                            </p>
                        </div>
                        <div
                            style={{
                                background: "var(--black)",
                                padding: "64px 52px",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.12) 0%, transparent 60%)",
                                    pointerEvents: "none",
                                }}
                            />
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 32 }}>The difference</p>
                            <p
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(28px, 3.5vw, 52px)",
                                    fontWeight: 300,
                                    color: "var(--white)",
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 40,
                                }}
                            >
                                We don&apos;t just<br />
                                manage weddings.<br />
                                <em>We elevate them.</em>
                            </p>
                            <p className="body-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
                                When you hire Beyond the Vow, you&apos;re not getting one person. You&apos;re getting a full production team dedicated to protecting your peace and perfecting every detail.
                            </p>
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 768px) {
                        .btv-about-intro-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
                    }
                `}</style>
            </section>

            {/* MEET THE FOUNDERS */}
            <section
                style={{
                    padding: "120px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                    overflow: "hidden",
                }}
            >
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ marginBottom: 80, textAlign: "center" }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 16 }}>The People Behind the Magic</p>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(36px, 5vw, 80px)",
                                fontWeight: 300,
                                color: "var(--black)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.0,
                            }}
                        >
                            Meet Your Bridal<br /><em>Dream Team</em>
                        </h2>
                    </div>

                    {/* MARYLEEN */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 2,
                            marginBottom: 2,
                            background: "var(--black)",
                        }}
                        className="btv-founder-grid"
                    >
                        {/* Maryleen — real profile photo */}
                        <div
                            style={{
                                position: "relative",
                                minHeight: 600,
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/maryleen-profile.png"
                                alt="Maryleen, Founder of Beyond the Vow"
                                fill
                                style={{ objectFit: "cover", objectPosition: "25% top" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Gradient overlay */}
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "35%",
                                    background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                                }}
                            />
                        </div>
                        {/* Bio */}
                        <div style={{ padding: "64px 56px", background: "var(--black)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 12 }}>Founder</p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(32px, 4vw, 56px)",
                                    fontWeight: 300,
                                    color: "var(--white)",
                                    letterSpacing: "-0.01em",
                                    marginBottom: 8,
                                    lineHeight: 1.1,
                                }}
                            >
                                Maryleen
                            </h3>
                            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 40, letterSpacing: "0.2em" }}>
                                Lead Coordinator · Bridal Beauty Expert
                            </p>
                            <p className="body-lg" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, fontStyle: "italic" }}>
                                &ldquo;I&apos;m Maryleen. To many of my brides, I am the calm in the chaos.&rdquo;
                            </p>
                            <p className="body-sm" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 20, lineHeight: 1.9 }}>
                                I&apos;ve spent over 10 years in the wedding industry as a professional bridal makeup artist, working with hundreds of brides, celebrity clients, and even television productions.
                            </p>
                            <p className="body-sm" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 20, lineHeight: 1.9 }}>
                                Beyond the Vow was established to bring my beauty background and attention to detail into the world of coordination, ensuring every bride feels completely supported. Because you deserve both beauty and peace.
                            </p>
                        </div>
                    </div>

                    {/* NATALIE */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 2,
                            background: "var(--pale)",
                        }}
                        className="btv-founder-grid"
                    >
                        {/* Bio — reversed */}
                        <div style={{ padding: "64px 56px", background: "var(--white)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 12 }}>Co-Founder</p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(32px, 4vw, 56px)",
                                    fontWeight: 300,
                                    color: "var(--black)",
                                    letterSpacing: "-0.01em",
                                    marginBottom: 8,
                                    lineHeight: 1.1,
                                }}
                            >
                                Natalie
                            </h3>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 40, letterSpacing: "0.2em" }}>
                                Chevalier · Planning &amp; Design Specialist
                            </p>
                            <p className="body-sm" style={{ color: "var(--midnight-grey)", marginBottom: 20, lineHeight: 1.9 }}>
                                With years of experience in event planning and decoration, Natalie is the design brain behind the magic.
                            </p>
                            <p className="body-sm" style={{ color: "var(--midnight-grey)", marginBottom: 20, lineHeight: 1.9 }}>
                                From layouts to florals to the smallest styling details, she has an eye for creating spaces that feel intentional, elevated, and unforgettable.
                            </p>
                            <p className="body-sm" style={{ color: "var(--midnight-grey)", marginBottom: 32, lineHeight: 1.9 }}>
                                She&apos;s the reason nothing looks misplaced, every table feels curated, and every setup feels luxurious. While Maryleen handles beauty + flow, Natalie ensures the entire aesthetic vision comes to life flawlessly. <em>Together, they&apos;re the perfect balance of glam and logistics.</em>
                            </p>
                        </div>
                        {/* Photo placeholder */}
                        <div
                            style={{
                                background: "linear-gradient(135deg, #f5f0eb 0%, #ede8e3 100%)",
                                minHeight: 600,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{ textAlign: "center", padding: 40 }}>
                                <div
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: "50%",
                                        background: "rgba(0,0,0,0.06)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 24px",
                                        fontSize: 48,
                                    }}
                                >
                                    🎀
                                </div>
                                <p className="eyebrow" style={{ color: "rgba(0,0,0,0.25)" }}>Photo Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 768px) {
                        .btv-founder-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>
            </section>

            {/* OUR PROMISE */}
            <section
                style={{
                    background: "var(--black)",
                    padding: "120px clamp(24px,5vw,100px)",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 740, margin: "0 auto" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 32 }}>Our Promise</p>
                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(36px, 5vw, 80px)",
                            fontWeight: 300,
                            color: "var(--white)",
                            lineHeight: 1.0,
                            letterSpacing: "-0.02em",
                            marginBottom: 48,
                        }}
                    >
                        We&apos;re not just vendors.<br />
                        <em>We become your people.</em>
                    </h2>
                    <p className="body-lg" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 24, maxWidth: 560, margin: "0 auto 24px" }}>
                        Your support system. Your problem solvers. Your behind-the-scenes protectors.
                    </p>
                    <p className="body-lg" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 60, maxWidth: 560, margin: "0 auto 60px" }}>
                        So you can be fully present on the most important day of your life.
                    </p>
                    <Link href="/consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                        <span>Book Your Consultation</span>
                        <span style={{ fontSize: 18 }}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
