import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { FetchUser } from "@/components/authentification/FetchUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Linkal - Analyse your LinkedIn chats",
    description: "by Simon Gneuss",
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <FetchUser>{children}</FetchUser>
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
