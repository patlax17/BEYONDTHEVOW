"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    weddingDate: string;
    location: string;
    guestCount: string;
    budget: string;
    service: string;
    story: string;
    hearAboutUs: string;
};

const STEPS = [
    { id: 1, title: "About You", subtitle: "Let us begin with the essentials." },
    { id: 2, title: "Your Vision", subtitle: "Help us understand your celebration." },
    { id: 3, title: "Your Story", subtitle: "Tell us something we cannot Google." },
];

const serviceOptions = [
    "Full Planning & Design",
    "Wedding Design Direction",
    "Day-of Coordination",
    "Destination Wedding Planning",
    "Elopement & Intimate Ceremonies",
    "Corporate Events",
];

const budgetOptions = [
    "$50,000 – $100,000",
    "$100,000 – $200,000",
    "$200,000 – $350,000",
    "$350,000 – $500,000",
    "$500,000+",
    "Let&apos;s discuss",
];

export default function InquiryForm() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weddingDate: "",
        location: "",
        guestCount: "",
        budget: "",
        service: "",
        story: "",
        hearAboutUs: "",
    });

    const update = (field: keyof FormData, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "80px 24px",
                    animation: "fadeUp 0.7s ease forwards",
                }}
            >
                <div
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "var(--vogue-red)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 32px",
                        fontSize: 32,
                    }}
                >
                    ✓
                </div>
                <h3
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(32px, 4vw, 56px)",
                        fontWeight: 300,
                        color: "var(--white)",
                        marginBottom: 20,
                    }}
                >
                    Your story has been received.
                </h3>
                <p className="body-lg" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto 40px" }}>
                    We review every inquiry personally. Expect a thoughtful response within
                    48 hours — often sooner.
                </p>
                <Link href="/" className="btn-outline-white">
                    <span>Return Home</span>
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            {/* Step indicators */}
            <div
                style={{
                    display: "flex",
                    gap: 0,
                    marginBottom: 64,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
            >
                {STEPS.map((s) => (
                    <div
                        key={s.id}
                        style={{
                            flex: 1,
                            padding: "0 0 16px",
                            borderBottom: `2px solid ${step >= s.id ? "var(--vogue-red)" : "transparent"}`,
                            marginBottom: -1,
                            cursor: step > s.id ? "pointer" : "default",
                        }}
                        onClick={() => step > s.id && setStep(s.id)}
                    >
                        <p
                            className="eyebrow"
                            style={{
                                color: step >= s.id ? "var(--white)" : "rgba(255,255,255,0.2)",
                                marginBottom: 4,
                                transition: "color 0.3s ease",
                            }}
                        >
                            0{s.id}
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: 12,
                                color: step >= s.id ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
                                transition: "color 0.3s ease",
                            }}
                        >
                            {s.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Step content */}
            <div key={step} style={{ animation: "fadeUp 0.5s ease forwards" }}>
                <div style={{ marginBottom: 40 }}>
                    <h3
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(28px, 3.5vw, 48px)",
                            fontWeight: 300,
                            color: "var(--white)",
                            marginBottom: 8,
                        }}
                    >
                        {STEPS[step - 1].title}
                    </h3>
                    <p className="body-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {STEPS[step - 1].subtitle}
                    </p>
                </div>

                {step === 1 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                            <div>
                                <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                    First Name *
                                </label>
                                <input
                                    id="inquiry-first-name"
                                    className="btv-input"
                                    style={{
                                        color: "var(--white)",
                                        borderBottomColor: "rgba(255,255,255,0.15)",
                                    }}
                                    value={formData.firstName}
                                    onChange={(e) => update("firstName", e.target.value)}
                                    placeholder="Your first name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                    Last Name *
                                </label>
                                <input
                                    id="inquiry-last-name"
                                    className="btv-input"
                                    style={{
                                        color: "var(--white)",
                                        borderBottomColor: "rgba(255,255,255,0.15)",
                                    }}
                                    value={formData.lastName}
                                    onChange={(e) => update("lastName", e.target.value)}
                                    placeholder="Your last name"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                Email Address *
                            </label>
                            <input
                                id="inquiry-email"
                                type="email"
                                className="btv-input"
                                style={{
                                    color: "var(--white)",
                                    borderBottomColor: "rgba(255,255,255,0.15)",
                                }}
                                value={formData.email}
                                onChange={(e) => update("email", e.target.value)}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                Phone Number
                            </label>
                            <input
                                id="inquiry-phone"
                                type="tel"
                                className="btv-input"
                                style={{
                                    color: "var(--white)",
                                    borderBottomColor: "rgba(255,255,255,0.15)",
                                }}
                                value={formData.phone}
                                onChange={(e) => update("phone", e.target.value)}
                                placeholder="+1 (000) 000-0000"
                            />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                            <div>
                                <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                    Wedding Date
                                </label>
                                <input
                                    id="inquiry-date"
                                    type="date"
                                    className="btv-input"
                                    style={{
                                        color: "var(--white)",
                                        borderBottomColor: "rgba(255,255,255,0.15)",
                                        colorScheme: "dark",
                                    }}
                                    value={formData.weddingDate}
                                    onChange={(e) => update("weddingDate", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                    Estimated Guest Count
                                </label>
                                <input
                                    id="inquiry-guest-count"
                                    className="btv-input"
                                    style={{
                                        color: "var(--white)",
                                        borderBottomColor: "rgba(255,255,255,0.15)",
                                    }}
                                    value={formData.guestCount}
                                    onChange={(e) => update("guestCount", e.target.value)}
                                    placeholder="e.g. 80"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                Dream Location / Venue
                            </label>
                            <input
                                id="inquiry-location"
                                className="btv-input"
                                style={{
                                    color: "var(--white)",
                                    borderBottomColor: "rgba(255,255,255,0.15)",
                                }}
                                value={formData.location}
                                onChange={(e) => update("location", e.target.value)}
                                placeholder="City, country, or specific venue"
                            />
                        </div>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
                                Service of Interest
                            </label>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                {serviceOptions.map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        id={`service-${s.toLowerCase().replace(/ /g, "-")}`}
                                        onClick={() => update("service", s)}
                                        style={{
                                            background: formData.service === s ? "var(--vogue-red)" : "transparent",
                                            border: `1px solid ${formData.service === s ? "var(--vogue-red)" : "rgba(255,255,255,0.15)"}`,
                                            padding: "14px 16px",
                                            textAlign: "left",
                                            cursor: "pointer",
                                            fontFamily: "var(--font-body)",
                                            fontSize: 12,
                                            fontWeight: 300,
                                            color: "rgba(255,255,255,0.7)",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
                                Investment Range
                            </label>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {budgetOptions.map((b) => (
                                    <button
                                        key={b}
                                        type="button"
                                        onClick={() => update("budget", b)}
                                        style={{
                                            background: formData.budget === b ? "var(--white)" : "transparent",
                                            border: `1px solid ${formData.budget === b ? "var(--white)" : "rgba(255,255,255,0.15)"}`,
                                            padding: "10px 20px",
                                            cursor: "pointer",
                                            fontFamily: "var(--font-body)",
                                            fontSize: 11,
                                            fontWeight: 300,
                                            color: formData.budget === b ? "var(--black)" : "rgba(255,255,255,0.5)",
                                            letterSpacing: "0.08em",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                Tell us your story *
                            </label>
                            <textarea
                                id="inquiry-story"
                                className="btv-input"
                                style={{
                                    color: "var(--white)",
                                    borderBottomColor: "rgba(255,255,255,0.15)",
                                    resize: "none",
                                    minHeight: 160,
                                    paddingTop: 16,
                                }}
                                value={formData.story}
                                onChange={(e) => update("story", e.target.value)}
                                placeholder="How did you meet? What does your dream celebration feel like? What matters most to you beyond the aesthetics? There are no wrong answers here."
                                required
                            />
                            <p className="body-sm" style={{ color: "rgba(255,255,255,0.2)", marginTop: 8 }}>
                                The more you share, the more intentional we can be.
                            </p>
                        </div>
                        <div>
                            <label className="btv-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                                How did you discover Beyond The Vow?
                            </label>
                            <input
                                id="inquiry-referral"
                                className="btv-input"
                                style={{
                                    color: "var(--white)",
                                    borderBottomColor: "rgba(255,255,255,0.15)",
                                }}
                                value={formData.hearAboutUs}
                                onChange={(e) => update("hearAboutUs", e.target.value)}
                                placeholder="Instagram, a friend, a vendor, a publication..."
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 60,
                }}
            >
                {step > 1 ? (
                    <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        style={{
                            background: "none",
                            border: "none",
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "var(--font-body)",
                            fontSize: 11,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        ← Back
                    </button>
                ) : (
                    <div />
                )}

                {step < STEPS.length ? (
                    <button
                        type="button"
                        id={`inquiry-next-step-${step}`}
                        onClick={() => setStep(step + 1)}
                        className="btn-primary"
                    >
                        <span>Continue</span>
                        <span style={{ fontSize: 16 }}>→</span>
                    </button>
                ) : (
                    <button type="submit" id="inquiry-submit" className="btn-primary">
                        <span>Send Your Inquiry</span>
                        <span style={{ fontSize: 16 }}>→</span>
                    </button>
                )}
            </div>
        </form>
    );
}
