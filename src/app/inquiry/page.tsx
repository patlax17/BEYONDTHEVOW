import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
    title: "Begin Your Story — Inquiry",
    description:
        "Start your journey with Beyond The Vow. Our multi-step inquiry process ensures we understand your vision before our first conversation.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How far in advance should I inquire?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend inquiring 12–18 months before your desired date for full planning services. We occasionally have availability for shorter timelines — always inquire regardless.",
            },
        },
        {
            "@type": "Question",
            name: "Do you work outside of the United States?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We have planned and designed weddings across 12 countries and are deeply familiar with international logistical requirements.",
            },
        },
        {
            "@type": "Question",
            name: "What is your starting investment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our full planning services start at $50,000. Design direction begins at $25,000. All fees include our full team, tools, and 500+ hours of dedicated service.",
            },
        },
    ],
};

export default function InquiryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div
                style={{
                    background: "var(--black)",
                    minHeight: "100vh",
                    paddingTop: 120,
                }}
            >
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        padding: "80px clamp(24px,5vw,100px) 120px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: 100,
                        alignItems: "start",
                    }}
                >
                    {/* Left column */}
                    <div style={{ position: "sticky", top: 120 }}>
                        <p
                            className="eyebrow"
                            style={{ color: "rgba(255,255,255,0.25)", marginBottom: 24 }}
                        >
                            07 — Begin Your Story
                        </p>
                        <h1
                            className="headline-xl"
                            style={{ color: "var(--white)", marginBottom: 32 }}
                        >
                            Let us plan <br />
                            <em>something<br />extraordinary.</em>
                        </h1>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.4)", marginBottom: 60 }}
                        >
                            Every inquiry is reviewed personally by our founding team.
                            We respond within 48 hours — usually sooner.
                        </p>

                        {/* What to expect */}
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 40 }}>
                            <p
                                className="eyebrow"
                                style={{ color: "rgba(255,255,255,0.25)", marginBottom: 28 }}
                            >
                                What happens next
                            </p>
                            {[
                                { step: "01", text: "We review your inquiry within 48 hours" },
                                { step: "02", text: "A personalised response from our founding team" },
                                { step: "03", text: "A 90-minute discovery call at no charge" },
                                { step: "04", text: "A bespoke proposal built around your vision" },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    style={{
                                        display: "flex",
                                        gap: 20,
                                        marginBottom: 24,
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: 11,
                                            color: "rgba(255,255,255,0.2)",
                                            lineHeight: 1.6,
                                            minWidth: 24,
                                        }}
                                    >
                                        {item.step}
                                    </span>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 13,
                                            fontWeight: 300,
                                            color: "rgba(255,255,255,0.5)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 40, marginTop: 16 }}>
                            <p
                                className="eyebrow"
                                style={{ color: "rgba(255,255,255,0.25)", marginBottom: 28 }}
                            >
                                Common Questions
                            </p>
                            {[
                                { q: "How far ahead should I inquire?", a: "12–18 months is ideal. We sometimes have shorter availability — always ask." },
                                { q: "Do you work internationally?", a: "Yes. We have planned weddings across 12 countries." },
                                { q: "What is the starting investment?", a: "Full planning from $50,000. Design direction from $25,000." },
                            ].map((faq) => (
                                <div
                                    key={faq.q}
                                    style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: "rgba(255,255,255,0.6)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        {faq.q}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 12,
                                            fontWeight: 300,
                                            color: "rgba(255,255,255,0.3)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column — form */}
                    <div>
                        <InquiryForm />
                    </div>
                </div>
            </div>
        </>
    );
}
