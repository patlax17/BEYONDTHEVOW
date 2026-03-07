"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
    {
        id: "mood",
        question: "If your wedding were a film, it would be directed by...",
        options: [
            { label: "Wes Anderson", value: "editorial", description: "Symmetry, pastels, storybook wonder" },
            { label: "Wong Kar-wai", value: "intimate", description: "Moody, saturated, deeply romantic" },
            { label: "Sofia Coppola", value: "ethereal", description: "Soft light, dreamlike, effortless cool" },
            { label: "Stanley Kubrick", value: "dramatic", description: "Bold geometry, grand scale, precision" },
        ],
    },
    {
        id: "palette",
        question: "Your wedding palette in three words...",
        options: [
            { label: "Ivory · Sage · Bronze", value: "natural", description: "Organic, earthy, timeless" },
            { label: "Black · Champagne · Red", value: "opulent", description: "Dramatic, luxurious, unforgettable" },
            { label: "White · Blush · Gold", value: "romantic", description: "Classic, soft, eternally elegant" },
            { label: "Navy · Terracotta · Rust", value: "bold", description: "Rich, unexpected, deeply personal" },
        ],
    },
    {
        id: "setting",
        question: "Your dream venue feels like...",
        options: [
            { label: "A sun-drenched Italian cliffside", value: "destination", description: "Mediterranean light, local wines" },
            { label: "A 17th-century French Château", value: "heritage", description: "Grandeur, history, romance" },
            { label: "A cliffside desert retreat", value: "landscape", description: "Raw nature, golden hour magic" },
            { label: "A skyline rooftop at midnight", value: "urban", description: "City energy, modern luxury" },
        ],
    },
    {
        id: "scale",
        question: "Your celebration feels most like...",
        options: [
            { label: "An intimate gathering", value: "micro", description: "20–50 guests, deeply intentional" },
            { label: "A curated dinner party", value: "mid", description: "50–100 guests, personal touches everywhere" },
            { label: "A grand social event", value: "large", description: "100–200 guests, full spectacle" },
            { label: "An epic weekend affair", value: "epic", description: "Multi-day, multi-event, all-in" },
        ],
    },
];

const results: Record<string, { title: string; description: string; aesthetic: string[] }> = {
    editorial: {
        title: "The Auteur Edit",
        description: "You have an eye for detail and a love of narrative. Your wedding is a living gallery — every table a scene, every flower arrangement a composition.",
        aesthetic: ["Maximalist florals", "Editorial stationery", "Bespoke tablescapes", "Film photography"],
    },
    intimate: {
        title: "The Romance Narrative",
        description: "Depth over breadth. Your wedding is an immersive love letter — layered, sensory, and overwhelmingly personal.",
        aesthetic: ["Candlelit everything", "Rich jewel tones", "String quartet", "Heirloom details"],
    },
    ethereal: {
        title: "The Soft Focus",
        description: "Effortlessly beautiful without trying. Your wedding feels like a long afternoon — golden, warm, and completely your own.",
        aesthetic: ["Organic florals", "Linen and silk textiles", "Natural light ceremony", "Bespoke perfume bar"],
    },
    dramatic: {
        title: "The Grand Statement",
        description: "You understand scale. Your wedding makes a visual argument — every decision considered, every element designed to astonish.",
        aesthetic: ["Architectural florals", "Drone light show", "Monochrome palette", "Sculptural food decor"],
    },
};

export default function StyleQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [result, setResult] = useState<string | null>(null);
    const [started, setStarted] = useState(false);

    const handleAnswer = (value: string) => {
        const newAnswers = { ...answers, [questions[currentQ].id]: value };
        setAnswers(newAnswers);

        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            // Compute result based on first mood answer
            const moodAnswer = newAnswers.mood || "editorial";
            setResult(moodAnswer);
        }
    };

    const reset = () => {
        setCurrentQ(0);
        setAnswers({});
        setResult(null);
        setStarted(false);
    };

    const currentResult = result ? results[result] : null;
    const progress = ((currentQ + (result ? 1 : 0)) / questions.length) * 100;

    return (
        <section
            style={{
                padding: "120px clamp(24px,5vw,100px)",
                background: "var(--pale)",
            }}
            aria-label="AI Style Quiz"
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                {/* Header */}
                <div style={{ marginBottom: 80, maxWidth: 640 }}>
                    <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 12 }}>
                        05 — AI Style Discovery
                    </p>
                    <h2 className="headline-lg" style={{ color: "var(--black)" }}>
                        Discover your<br />
                        <em>wedding aesthetic.</em>
                    </h2>
                    <p
                        className="body-lg"
                        style={{ color: "var(--midnight-grey)", marginTop: 20 }}
                    >
                        Four questions. A decade of taste. We translate your instincts into
                        a concrete aesthetic direction — then build your world around it.
                    </p>
                </div>

                {!started && !result && (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 48,
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                background: "var(--black)",
                                padding: "60px 48px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 32,
                            }}
                        >
                            {["The Auteur Edit", "The Romance Narrative", "The Soft Focus", "The Grand Statement"].map(
                                (style) => (
                                    <div key={style} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--vogue-red)" }} />
                                        <p
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: 20,
                                                fontWeight: 300,
                                                color: "rgba(255,255,255,0.7)",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {style}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                        <div>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 40 }}>
                                No vague adjectives. No Pinterest boards lost in translation.
                                Just four carefully crafted questions that reveal your wedding&apos;s
                                true aesthetic soul.
                            </p>
                            <button
                                id="style-quiz-start"
                                onClick={() => setStarted(true)}
                                className="btn-primary"
                            >
                                <span>Take the Quiz</span>
                                <span style={{ fontSize: 16 }}>→</span>
                            </button>
                        </div>
                    </div>
                )}

                {started && !result && (
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        {/* Progress */}
                        <div style={{ marginBottom: 48 }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 8,
                                }}
                            >
                                <p className="eyebrow" style={{ color: "var(--light-grey)" }}>
                                    Question {currentQ + 1} of {questions.length}
                                </p>
                                <p className="eyebrow" style={{ color: "var(--light-grey)" }}>
                                    {Math.round(progress)}%
                                </p>
                            </div>
                            <div style={{ height: 1, background: "rgba(0,0,0,0.12)" }}>
                                <div
                                    style={{
                                        height: "100%",
                                        background: "var(--vogue-red)",
                                        width: `${progress}%`,
                                        transition: "width 0.4s ease",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Question */}
                        <div key={currentQ} style={{ animation: "fadeUp 0.5s ease forwards" }}>
                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(28px, 3.5vw, 48px)",
                                    fontWeight: 300,
                                    color: "var(--black)",
                                    marginBottom: 48,
                                    lineHeight: 1.2,
                                }}
                            >
                                {questions[currentQ].question}
                            </h3>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 16,
                                }}
                            >
                                {questions[currentQ].options.map((option) => (
                                    <button
                                        key={option.value}
                                        id={`quiz-option-${option.value}`}
                                        onClick={() => handleAnswer(option.value)}
                                        style={{
                                            background: "var(--white)",
                                            border: "1px solid rgba(0,0,0,0.1)",
                                            padding: "28px 24px",
                                            textAlign: "left",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = "var(--black)";
                                            el.style.borderColor = "var(--black)";
                                            el.querySelectorAll("p").forEach((p) => {
                                                (p as HTMLElement).style.color = "var(--white)";
                                            });
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.background = "var(--white)";
                                            el.style.borderColor = "rgba(0,0,0,0.1)";
                                            el.querySelectorAll("p").forEach((p, pi) => {
                                                (p as HTMLElement).style.color = pi === 0 ? "var(--black)" : "var(--light-grey)";
                                            });
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: 20,
                                                fontWeight: 400,
                                                color: "var(--black)",
                                                marginBottom: 8,
                                                transition: "color 0.3s ease",
                                            }}
                                        >
                                            {option.label}
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: 12,
                                                fontWeight: 300,
                                                color: "var(--light-grey)",
                                                transition: "color 0.3s ease",
                                            }}
                                        >
                                            {option.description}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {result && currentResult && (
                    <div
                        style={{
                            animation: "fadeUp 0.7s ease forwards",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 80,
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <p className="eyebrow" style={{ color: "var(--vogue-red)", marginBottom: 16 }}>
                                Your Aesthetic
                            </p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(40px, 5vw, 80px)",
                                    fontWeight: 300,
                                    color: "var(--black)",
                                    lineHeight: 0.95,
                                    marginBottom: 24,
                                }}
                            >
                                {currentResult.title}
                            </h3>
                            <p className="body-lg" style={{ color: "var(--midnight-grey)", marginBottom: 40 }}>
                                {currentResult.description}
                            </p>
                            <div style={{ display: "flex", gap: 16 }}>
                                <Link href="/inquiry" className="btn-primary">
                                    <span>Begin Your Journey</span>
                                </Link>
                                <button
                                    onClick={reset}
                                    className="btn-outline"
                                    style={{ background: "none" }}
                                >
                                    Retake Quiz
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="eyebrow" style={{ color: "var(--light-grey)", marginBottom: 24 }}>
                                Your aesthetic lexicon
                            </p>
                            <div
                                style={{ display: "flex", flexDirection: "column", gap: 16 }}
                            >
                                {currentResult.aesthetic.map((item, i) => (
                                    <div
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 20,
                                            padding: "20px 24px",
                                            background: "var(--white)",
                                            animation: `fadeUp 0.4s ease ${i * 0.1}s forwards`,
                                            opacity: 0,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: 13,
                                                color: "var(--light-grey)",
                                                minWidth: 24,
                                            }}
                                        >
                                            0{i + 1}
                                        </span>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: 14,
                                                fontWeight: 400,
                                                color: "var(--black)",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
