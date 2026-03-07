"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
    {
        number: "01",
        phase: "Discovery",
        title: "The First Conversation",
        duration: "Week 1",
        description:
            "An intimate 90-minute discovery session where we listen more than we speak. We explore your vision, values, and the emotional narrative you want your wedding to tell.",
        deliverables: ["Personalised vision brief", "Initial moodboard", "Timeline overview"],
    },
    {
        number: "02",
        phase: "Concepting",
        title: "The Blueprint",
        duration: "Weeks 2–4",
        description:
            "We translate your story into a comprehensive aesthetic and logistical blueprint — covering everything from the invitation suite to the final farewell.",
        deliverables: ["Full design concept deck", "Vendor shortlist", "Budget architecture"],
    },
    {
        number: "03",
        phase: "Curation",
        title: "The Ensemble",
        duration: "Months 2–8",
        description:
            "Our global network of artisan photographers, florists, chefs, and musicians are curated and contracted. Every vendor is a creative collaborator, not just a supplier.",
        deliverables: ["Signed vendor contracts", "Design specification sheets", "Culinary direction brief"],
    },
    {
        number: "04",
        phase: "Production",
        title: "The Build",
        duration: "Months 9–11",
        description:
            "Over 500 hours of meticulous production work — logistics architecture, venue transformation plans, guest experience design, and the complete operational playbook.",
        deliverables: ["Day-of timeline", "Venue installation plan", "Guest journey map"],
    },
    {
        number: "05",
        phase: "Execution",
        title: "Your Day",
        duration: "The Celebration",
        description:
            "We are present, invisible, and omniscient. Our team manages every logistical thread so you experience only the joy of your celebration — nothing else.",
        deliverables: ["Full on-site team", "Vendor coordination", "24/7 emergency cover"],
    },
    {
        number: "06",
        phase: "Legacy",
        title: "The Afterglow",
        duration: "Post-Event",
        description:
            "Final vendor settlements, custom digital album, editorial-quality memory book, and a private gallery for your guests — your story preserved with intention.",
        deliverables: ["Curated memory book", "Guest highlight reel", "Private digital gallery"],
    },
];

export default function Timeline() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section
            style={{
                padding: "120px clamp(24px,5vw,100px)",
                background: "var(--black)",
                color: "var(--white)",
                overflow: "hidden",
            }}
            aria-label="The Experience Timeline"
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                {/* Header */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 60,
                        marginBottom: 80,
                        alignItems: "end",
                    }}
                >
                    <div>
                        <p className="eyebrow" style={{ color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
                            04 — The Experience
                        </p>
                        <h2 className="headline-lg" style={{ color: "var(--white)" }}>
                            The Story<br />
                            <em>to Soirée</em><br />
                            Journey.
                        </h2>
                    </div>
                    <div>
                        <p className="body-lg" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 32 }}>
                            From your first inquiry to your farewell dance — over 500 meticulously
                            orchestrated hours, every one of them in service of your singular vision.
                        </p>
                        <Link href="/experience" className="btn-outline-white">
                            <span>Explore the Full Process</span>
                        </Link>
                    </div>
                </div>

                {/* Timeline navigation */}
                <div
                    style={{
                        display: "flex",
                        gap: 0,
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        marginBottom: 60,
                        overflowX: "auto",
                        scrollbarWidth: "none",
                    }}
                >
                    {steps.map((step, i) => (
                        <button
                            key={step.number}
                            id={`timeline-step-${i}`}
                            onClick={() => setActiveStep(i)}
                            style={{
                                background: "none",
                                border: "none",
                                borderBottom: `2px solid ${i === activeStep ? "var(--white)" : "transparent"}`,
                                padding: "16px 32px 14px",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                transition: "all 0.3s ease",
                                marginBottom: -1,
                            }}
                        >
                            <p
                                className="eyebrow"
                                style={{
                                    color: i === activeStep ? "var(--white)" : "rgba(255,255,255,0.25)",
                                    marginBottom: 4,
                                    transition: "color 0.3s ease",
                                }}
                            >
                                {step.number}
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: 11,
                                    fontWeight: 400,
                                    letterSpacing: "0.08em",
                                    color: i === activeStep ? "var(--white)" : "rgba(255,255,255,0.25)",
                                    transition: "color 0.3s ease",
                                }}
                            >
                                {step.phase}
                            </p>
                        </button>
                    ))}
                </div>

                {/* Active step content */}
                <div
                    key={activeStep}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 80,
                        alignItems: "start",
                        animation: "fadeUp 0.5s ease forwards",
                    }}
                >
                    <div>
                        <p
                            className="eyebrow"
                            style={{ color: "var(--vogue-red)", marginBottom: 20 }}
                        >
                            {steps[activeStep].duration}
                        </p>
                        <h3
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(36px, 4vw, 64px)",
                                fontWeight: 300,
                                color: "var(--white)",
                                lineHeight: 1.05,
                                marginBottom: 24,
                            }}
                        >
                            {steps[activeStep].title}
                        </h3>
                        <p className="body-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
                            {steps[activeStep].description}
                        </p>
                    </div>

                    <div>
                        <p
                            className="eyebrow"
                            style={{ color: "rgba(255,255,255,0.3)", marginBottom: 28 }}
                        >
                            Deliverables
                        </p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
                            {steps[activeStep].deliverables.map((item, i) => (
                                <li
                                    key={item}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                        animation: `fadeUp 0.4s ease ${i * 0.1}s forwards`,
                                        opacity: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            background: "var(--vogue-red)",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: 14,
                                            fontWeight: 300,
                                            color: "rgba(255,255,255,0.7)",
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Large step number */}
                        <div
                            style={{
                                marginTop: 60,
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(80px, 12vw, 160px)",
                                fontWeight: 300,
                                color: "rgba(255,255,255,0.04)",
                                lineHeight: 1,
                                userSelect: "none",
                            }}
                        >
                            {steps[activeStep].number}
                        </div>
                    </div>
                </div>

                {/* Progress bar */}
                <div
                    style={{
                        marginTop: 60,
                        height: 1,
                        background: "rgba(255,255,255,0.08)",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            background: "var(--vogue-red)",
                            width: `${((activeStep + 1) / steps.length) * 100}%`,
                            transition: "width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
