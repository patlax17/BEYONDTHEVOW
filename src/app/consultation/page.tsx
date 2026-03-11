"use client";

import { useState } from "react";

const services = [
    "Full Bridal Package",
    "Trial Session Only",
    "Bridesmaids & Party",
    "Airbrush Upgrade",
    "Not sure yet",
];

export default function ConsultationPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        location: "",
        service: "",
        partySize: "",
        vision: "",
        howDidYouHear: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: connect to form backend (e.g. Formspree, Resend, or email API)
        setSubmitted(true);
    };

    const inputStyle = (name: string) => ({
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: `1px solid ${focused === name ? "var(--black)" : "rgba(0,0,0,0.15)"}`,
        padding: "12px 0",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 300,
        color: "var(--black)",
        outline: "none",
        transition: "border-color 0.3s ease",
        appearance: "none" as const,
        WebkitAppearance: "none" as const,
    });

    return (
        <div style={{ paddingTop: 100 }}>
            {/* Hero */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px) 80px",
                    background: "var(--black)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at 90% 60%, rgba(180,120,130,0.15) 0%, transparent 60%)",
                    }}
                />
                <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
                    <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", marginBottom: 24 }}>
                        How to Book
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 80,
                            alignItems: "end",
                        }}
                    >
                        <h1 className="headline-xl" style={{ color: "var(--white)" }}>
                            Let&apos;s talk<br />
                            <em>about your day.</em>
                        </h1>
                        <p
                            className="body-lg"
                            style={{ color: "rgba(255,255,255,0.45)", alignSelf: "end" }}
                        >
                            Fill out the form below and we&apos;ll be in touch within 48 hours
                            to confirm availability and begin building your bespoke bridal look.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works — brief steps */}
            <section
                style={{
                    padding: "60px clamp(24px,5vw,100px)",
                    background: "var(--pale)",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 40,
                    }}
                >
                    {[
                        {
                            step: "01",
                            title: "Submit the Form",
                            desc: "Tell us about your date, vision, and what you need.",
                        },
                        {
                            step: "02",
                            title: "We Connect",
                            desc: "We'll reply within 48 hrs to confirm availability and next steps.",
                        },
                        {
                            step: "03",
                            title: "Secure Your Date",
                            desc: "A deposit locks in your spot. Then we start planning your look.",
                        },
                    ].map((s) => (
                        <div
                            key={s.step}
                            style={{ display: "flex", alignItems: "flex-start", gap: 24 }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: 48,
                                    fontWeight: 300,
                                    color: "rgba(0,0,0,0.08)",
                                    lineHeight: 1,
                                    flexShrink: 0,
                                }}
                            >
                                {s.step}
                            </span>
                            <div>
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 22,
                                        fontWeight: 400,
                                        color: "var(--black)",
                                        marginBottom: 8,
                                    }}
                                >
                                    {s.title}
                                </p>
                                <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FORM */}
            <section
                style={{
                    padding: "100px clamp(24px,5vw,100px) 160px",
                    background: "var(--white)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        gap: 100,
                        alignItems: "start",
                    }}
                >
                    {/* Sidebar info */}
                    <div style={{ position: "sticky", top: 120 }}>
                        <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 20 }}>
                            Consultation
                        </p>
                        <h2 className="headline-lg" style={{ color: "var(--black)", marginBottom: 40 }}>
                            Begin your<br />
                            <em>beauty journey.</em>
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <div>
                                <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 8 }}>
                                    Response Time
                                </p>
                                <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>
                                    Within 48 hours
                                </p>
                            </div>
                            <div>
                                <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 8 }}>
                                    Availability
                                </p>
                                <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>
                                    Weekends fill quickly — reach out early to secure your date.
                                </p>
                            </div>
                            <div>
                                <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 8 }}>
                                    Location
                                </p>
                                <p className="body-sm" style={{ color: "var(--midnight-grey)" }}>
                                    Studio & on-location services available. Travel fees may apply.
                                </p>
                            </div>
                            <div
                                style={{
                                    borderTop: "1px solid rgba(0,0,0,0.08)",
                                    paddingTop: 32,
                                }}
                            >
                                <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 8 }}>
                                    Or email us directly
                                </p>
                                <a
                                    href="mailto:hello@beyondthevow.com"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: 14,
                                        fontWeight: 300,
                                        color: "var(--black)",
                                        textDecoration: "none",
                                        borderBottom: "1px solid rgba(0,0,0,0.2)",
                                        paddingBottom: 2,
                                    }}
                                >
                                    hello@beyondthevow.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    {submitted ? (
                        <div
                            style={{
                                padding: "80px 60px",
                                background: "var(--pale)",
                                textAlign: "center",
                            }}
                        >
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 24 }}>
                                Received ✓
                            </p>
                            <h2
                                className="headline-md"
                                style={{ color: "var(--black)", marginBottom: 20 }}
                            >
                                Thank you,<br />
                                <em>we&apos;ll be in touch.</em>
                            </h2>
                            <p
                                className="body-lg"
                                style={{ color: "var(--midnight-grey)", maxWidth: 400, margin: "0 auto" }}
                            >
                                We&apos;ve received your enquiry and will respond within 48 hours.
                                Sit back, breathe, and let us take it from here.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                            {/* Name & Email */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="btv-label"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--midnight-grey)",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("name")}
                                        onBlur={() => setFocused(null)}
                                        style={inputStyle("name")}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="btv-label"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--midnight-grey)",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formState.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("email")}
                                        onBlur={() => setFocused(null)}
                                        style={inputStyle("email")}
                                    />
                                </div>
                            </div>

                            {/* Phone & Date */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="btv-label"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--midnight-grey)",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 (000) 000-0000"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("phone")}
                                        onBlur={() => setFocused(null)}
                                        style={inputStyle("phone")}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="weddingDate"
                                        className="btv-label"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--midnight-grey)",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Wedding Date *
                                    </label>
                                    <input
                                        id="weddingDate"
                                        name="weddingDate"
                                        type="date"
                                        required
                                        value={formState.weddingDate}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("weddingDate")}
                                        onBlur={() => setFocused(null)}
                                        style={inputStyle("weddingDate")}
                                    />
                                </div>
                            </div>

                            {/* Location & Service */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                                <div>
                                    <label
                                        htmlFor="location"
                                        className="btv-label"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--midnight-grey)",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Venue / Location
                                    </label>
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        placeholder="City or venue name"
                                        value={formState.location}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("location")}
                                        onBlur={() => setFocused(null)}
                                        style={inputStyle("location")}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="service"
                                        className="btv-label"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 9,
                                            fontWeight: 500,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--midnight-grey)",
                                            display: "block",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formState.service}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("service")}
                                        onBlur={() => setFocused(null)}
                                        style={{
                                            ...inputStyle("service"),
                                            cursor: "pointer",
                                        }}
                                    >
                                        <option value="" disabled>Select a service</option>
                                        {services.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Party Size */}
                            <div>
                                <label
                                    htmlFor="partySize"
                                    className="btv-label"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: 9,
                                        fontWeight: 500,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "var(--midnight-grey)",
                                        display: "block",
                                        marginBottom: 4,
                                    }}
                                >
                                    Number of People (including bride)
                                </label>
                                <input
                                    id="partySize"
                                    name="partySize"
                                    type="number"
                                    min="1"
                                    placeholder="e.g. 4"
                                    value={formState.partySize}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("partySize")}
                                    onBlur={() => setFocused(null)}
                                    style={{ ...inputStyle("partySize"), maxWidth: 200 }}
                                />
                            </div>

                            {/* Vision */}
                            <div>
                                <label
                                    htmlFor="vision"
                                    className="btv-label"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: 9,
                                        fontWeight: 500,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "var(--midnight-grey)",
                                        display: "block",
                                        marginBottom: 4,
                                    }}
                                >
                                    Tell Us About Your Vision *
                                </label>
                                <textarea
                                    id="vision"
                                    name="vision"
                                    required
                                    rows={5}
                                    placeholder="Describe your desired look, mood, style, or any inspiration you have in mind..."
                                    value={formState.vision}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("vision")}
                                    onBlur={() => setFocused(null)}
                                    style={{
                                        ...inputStyle("vision"),
                                        resize: "none",
                                        borderBottom: "none",
                                        border: `1px solid ${focused === "vision" ? "var(--black)" : "rgba(0,0,0,0.12)"}`,
                                        padding: "16px",
                                    }}
                                />
                            </div>

                            {/* How did you hear */}
                            <div>
                                <label
                                    htmlFor="howDidYouHear"
                                    className="btv-label"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        fontSize: 9,
                                        fontWeight: 500,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "var(--midnight-grey)",
                                        display: "block",
                                        marginBottom: 4,
                                    }}
                                >
                                    How Did You Hear About Us?
                                </label>
                                <input
                                    id="howDidYouHear"
                                    name="howDidYouHear"
                                    type="text"
                                    placeholder="Instagram, referral, Google, etc."
                                    value={formState.howDidYouHear}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("howDidYouHear")}
                                    onBlur={() => setFocused(null)}
                                    style={inputStyle("howDidYouHear")}
                                />
                            </div>

                            {/* Submit */}
                            <div style={{ display: "flex", alignItems: "center", gap: 24, paddingTop: 16 }}>
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ fontSize: 11 }}
                                >
                                    <span>Send Enquiry</span>
                                    <span style={{ fontSize: 18 }}>→</span>
                                </button>
                                <p className="body-sm" style={{ color: "var(--light-grey)" }}>
                                    We&apos;ll reply within 48 hours.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
