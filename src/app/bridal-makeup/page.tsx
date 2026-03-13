import type { Metadata } from "next";
import BridalMakeupClient from "@/components/BridalMakeupClient";

export const metadata: Metadata = {
    title: "Bridal Makeup & Beauty | Beyond the Vow",
    description: "Professional bridal makeup by Maryleen — 10+ years of experience with brides, celebrities, and television. Soft glam, airbrush, editorial, and full bridal party services.",
};

export default function BridalMakeupPage() {
    return <BridalMakeupClient />;
}
