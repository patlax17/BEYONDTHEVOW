import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio — Real Weddings",
    description:
        "A curated selection of ceremonies and celebrations designed by Beyond The Vow — from Amalfi cliffside dinners to Parisian château galas.",
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
