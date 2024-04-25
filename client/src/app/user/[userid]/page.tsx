"use client";
import { FC, useCallback } from "react";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import { toPng } from "html-to-image";
const SongField = dynamic(() => import("@/components/SongField"), {
    ssr: false,
});

import { Button } from "@/components/ui/button";
import ScreenshotButton from "@/components/Screenshot";

const Page: FC = () => {
    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Select your Top 5"} />
            <div
                id="user-page"
                className="flex z-50 absolute flex-col items-center  gap-5 sm:gap-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                {" "}
                {[1, 2, 3, 4, 5].map((position) => (
                    <SongField key={position} position={position} />
                ))}
                <ScreenshotButton />
            </div>
        </BackgroundGradientAnimation>
    );
};

export default Page;
