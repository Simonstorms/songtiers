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

const Page: FC = () => {
    const takeScreenshot = useCallback(() => {
        toPng(document.body, { cacheBust: true })
            .then((dataUrl) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    if (ctx) {
                        // Set the canvas dimensions to the desired size of the cropped image
                        const cropWidth = img.width * 0.7; // 60% of the width
                        const cropHeight = img.height * 0.7; // 60% of the height
                        canvas.width = cropWidth;
                        canvas.height = cropHeight;

                        // Draw the image onto the canvas, specifying the source dimensions (sx, sy, sWidth, sHeight)
                        // and the destination dimensions (dx, dy, dWidth, dHeight)
                        ctx.drawImage(
                            img,
                            img.width * 0.15, // Start at 20% from the left
                            img.height * 0.15, // Start at 20% from the top
                            cropWidth,
                            cropHeight,
                            0,
                            0,
                            cropWidth,
                            cropHeight,
                        );

                        // Convert the canvas back to a data URL
                        const croppedDataUrl = canvas.toDataURL();
                        const link = document.createElement("a");
                        link.download = "screenshot.png";
                        link.href = croppedDataUrl;
                        link.click();
                    }
                };
                img.src = dataUrl;
            })
            .catch((error) => {
                console.error("oops, something went wrong!", error);
            });
    }, []);
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
