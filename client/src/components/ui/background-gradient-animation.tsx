"use client";
import { cn } from "@/lib/utils";
import { useEffect, useSyncExternalStore } from "react";

const subscribeToNothing = () => () => {};

export const BackgroundGradientAnimation = ({
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "100, 220, 255",
    fourthColor = "200, 50, 50",
    fifthColor = "252, 252, 28",
    size = "70%",
    blendingValue = "hard-light",
    children,
    className,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    useEffect(() => {
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);

    const isSafari = useSyncExternalStore(
        subscribeToNothing,
        () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        () => false,
    );

    return (
        <div
            className={cn(
                "h-screen w-screen relative overflow-hidden top-0 left-0 ]",
                containerClassName,
            )}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={cn("", className)}>{children}</div>
            <div
                className={cn(
                    "gradients-container  h-full w-full blur-lg",
                    isSafari ? "blur-2xl" : "filter-[url(#blurMe)_blur(40px)]",
                )}
            >
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,var(--first-color)_0,var(--first-color)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-(--size) h-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `origin-[center_center]`,
                        `animate-first`,
                        `opacity-100`,
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0,rgba(var(--second-color),0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-(--size) h-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `origin-[calc(50%-400px)]`,
                        `animate-second`,
                        `opacity-100`,
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0,rgba(var(--third-color),0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-(--size) h-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `origin-[calc(50%+400px)]`,
                        `animate-third`,
                        `opacity-100`,
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0,rgba(var(--fourth-color),0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-(--size) h-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `origin-[calc(50%-200px)]`,
                        `animate-fourth`,
                        `opacity-100`,
                        `dark:opacity-70`,
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0,rgba(var(--fifth-color),0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-(--size) h-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `origin-[calc(50%-800px)_calc(50%+800px)]`,
                        `animate-fifth`,
                        `opacity-100`,
                    )}
                ></div>
            </div>
        </div>
    );
};
