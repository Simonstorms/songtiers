// components/ScreenshotButton.js
import { FC, RefObject } from "react";
import domToImage from "dom-to-image";
interface ScreenshotButtonProps {
    captureRef: RefObject<HTMLDivElement>; // Assuming the ref is for a div element
}
const ScreenshotButton: FC<ScreenshotButtonProps> = ({ captureRef }) => {
    const takeScreenshot = () => {
        if (captureRef.current) {
            domToImage
                .toPng(captureRef.current)
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.href = dataUrl;
                    link.download = "screenshot.png";
                    link.click();
                })
                .catch((error) => {
                    console.error("oops, something went wrong!", error);
                });
        }
    };

    return <button onClick={takeScreenshot}>Download Screenshot</button>;
};

export default ScreenshotButton;
