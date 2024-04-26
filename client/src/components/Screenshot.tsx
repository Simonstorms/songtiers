import React, { useCallback } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";

const ScreenshotButton = () => {
    const takeScreenshot = useCallback(() => {
        toPng(document.body, { cacheBust: true })
            .then((dataUrl) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    if (ctx) {
                        let cropWidth = img.width * 0.8;
                        let cropHeight = img.height * 0.7;
                        let offsetX = img.width * 0.1;
                        let offsetY = img.height * 0.15;

                        // Check if screen width is less than or equal to 768px
                        if (window.innerWidth <= 768) {
                            cropWidth = img.width;
                            cropHeight = img.height * 0.8;
                            offsetX = 0;
                            offsetY = img.height * 0.1;
                        }

                        canvas.width = cropWidth;
                        canvas.height = cropHeight;

                        ctx.drawImage(
                            img,
                            offsetX,
                            offsetY,
                            cropWidth,
                            cropHeight,
                            0,
                            0,
                            cropWidth,
                            cropHeight,
                        );

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
        <Button variant="outline" onClick={takeScreenshot}>
            Take Screenshot
        </Button>
    );
};

export default ScreenshotButton;
