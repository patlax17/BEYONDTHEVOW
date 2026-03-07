import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Journal — Trend Intelligence",
    description:
        "2026 wedding trend reports, editorials, and design intelligence from Beyond The Vow. Sculptural food decor, drone light shows, and more.",
};

export default function JournalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
