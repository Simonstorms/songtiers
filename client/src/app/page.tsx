"use client";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Songtiers"} />
            <Footer />
        </BackgroundGradientAnimation>
    );
}
