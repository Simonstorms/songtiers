"use client";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Test"} />
        </BackgroundGradientAnimation>
    );
}
