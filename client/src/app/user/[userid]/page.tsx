"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
const SongField = dynamic(() => import("@/components/SongField"), {
    ssr: false,
});

import ScreenshotButton from "@/components/Screenshot";
import Footer from "@/components/Footer";
import { WithUserProvider } from "@/components/authentification/WithUserProvider";

const Page = () => {
    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Select your Top 5"} />
            <div
                id="user-page"
                className="flex z-50 absolute flex-col items-center sm:pb-0 pb-20 justify-center align-middle gap-5 sm:gap-7 top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2"
            >
                {" "}
                {[1, 2, 3, 4, 5].map((position) => (
                    <SongField key={position} position={position} />
                ))}
                <ScreenshotButton />
            </div>
            <Footer />
        </BackgroundGradientAnimation>
    );
};

export default WithUserProvider(Page);
