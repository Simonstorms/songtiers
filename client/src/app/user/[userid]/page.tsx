"use client";
import { FC, useEffect, useRef } from "react";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const SongField = dynamic(() => import("@/components/SongField"), {
    ssr: false,
});
import domtoimage from "dom-to-image";
import { Button } from "@/components/ui/button";

const Page: FC = () => {
    const takeScreenshot = () => {
        const element = document.body;
        if (element) {
            domtoimage
                .toPng(element)
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "screenshot.png";
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) => {
                    console.error("oops, something went wrong!", error);
                });
        } else {
            console.error("Body element not found");
        }
    };
    return (
        <BackgroundGradientAnimation>
            <Navbar headline={"Select your Top 5"} />
            <div
                id="user-page"
                className="flex z-50 absolute flex-col items-center  gap-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                {" "}
                {[1, 2, 3, 4, 5].map((position) => (
                    <SongField key={position} position={position} />
                ))}
                <Button onClick={takeScreenshot}>Take Screenshot</Button>
            </div>
        </BackgroundGradientAnimation>
    );
};

export default Page;
