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
                                minHeight: 700,
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/maryleen-profile.png"
                                alt="Maryleen, Founder of Beyond the Vow"
                                fill
                                style={{ objectFit: "cover", objectPosition: "center center" }}
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
                            background: "var(--black)",
                        }}
                        className="btv-founder-grid"
                    >
                        {/* Bio — reversed */}
                        <div className="natalie-bio" style={{ padding: "64px 56px", background: "var(--black)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
                                Natalie
                            </h3>
                            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 40, letterSpacing: "0.2em" }}>
                                Assistant Coordinator
                            </p>
                            <p className="body-lg" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, fontStyle: "italic" }}>
                                &ldquo;I believe the best weddings feel effortless, because every detail has been thoughtfully planned.&rdquo;
                            </p>
                            <p className="body-sm" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 20, lineHeight: 1.9 }}>
                                With a background supporting C-suite executives, Natalie brings a high level of organization, precision, and calm leadership to every celebration. She specializes in managing timelines, coordinating vendors, and ensuring every moving part comes together seamlessly.
                            </p>
                            <p className="body-sm" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 20, lineHeight: 1.9 }}>
                                Beyond the Vow allows Natalie to combine her operational expertise with her eye for design, helping couples experience a wedding day that feels smooth, intentional, and truly unforgettable.
                            </p>
                        </div>
                        {/* Natalie — real profile photo */}
                        <div
                            className="natalie-photo"
                            style={{
                                position: "relative",
                                minHeight: 700,
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/natalie-profile.jpg"
                                alt="Natalie, Founder & Assistant Coordinator of Beyond the Vow"
                                fill
                                style={{ objectFit: "cover", objectPosition: "center top" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={100}
                                unoptimized
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
                    </div>
                </div>
                <style>{`
                    @media (max-width: 768px) {
                        .btv-founder-grid { grid-template-columns: 1fr !important; }
                        .natalie-photo { order: -1; }
                        .natalie-bio { order: 1; }
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
                    <p className="body-lg" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto 60px" }}>
                        Your support system. Your problem solvers. Your behind-the-scenes protectors — so you can be fully present on the most important day of your life.
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
