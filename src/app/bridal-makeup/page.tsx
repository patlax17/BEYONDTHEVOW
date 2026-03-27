import type { Metadata } from "next";
import BridalMakeupClient from "@/components/BridalMakeupClient";

export const metadata: Metadata = {
    title: "Bridal Makeup & Beauty | Beyond the Vow",
    description: "Professional bridal makeup by Maryleen — 10+ years of experience with brides, celebrities, and television. Soft glam, airbrush, editorial, and full bridal party services.",
    openGraph: {
        title: "Bridal Makeup & Beauty — Beyond the Vow",
        description: "Professional bridal makeup by Maryleen — 10+ years of experience with brides, celebrities, and television.",
        url: "https://beyondthevow.vercel.app/bridal-makeup",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beyond the Vow — Bridal Makeup & Beauty" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bridal Makeup & Beauty — Beyond the Vow",
        description: "Professional bridal makeup by Maryleen — 10+ years experience.",
        images: ["/og-image.png"],
    },
};

export default function BridalMakeupPage() {
    return <BridalMakeupClient />;
}
