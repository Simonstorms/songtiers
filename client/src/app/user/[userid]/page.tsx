"use client";
import { FC, useRef } from "react";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ScreenshotButton from "@/components/Screenshot";

const SongField = dynamic(() => import("@/components/SongField"), {
    ssr: false,
});
const Page: FC = () => {
    const captureRef = useRef(null);

    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Select your Top 5"} />
            <div className="flex z-50 absolute flex-col items-center  gap-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {" "}
                {[1, 2, 3, 4, 5].map((position) => (
                    <SongField key={position} position={position} />
                ))}
                <ScreenshotButton captureRef={captureRef} />
            </div>
        </BackgroundGradientAnimation>
    );
};

export default Page;
