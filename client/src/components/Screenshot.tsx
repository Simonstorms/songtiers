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
                        const cropWidth = img.width * 0.8;
                        const cropHeight = img.height * 0.7;
                        canvas.width = cropWidth;
                        canvas.height = cropHeight;

                        ctx.drawImage(
                            img,
                            img.width * 0.1,
                            img.height * 0.15,
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
