"use client";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Footer from "@/components/Footer";
import Main from "@/components/MainHome";

export default function Home() {
    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Songtiers"} />
            <div className="flex   justify-center">
                <Main />
            </div>

            <Footer />
        </BackgroundGradientAnimation>
    );
}
