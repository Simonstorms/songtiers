import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {ReactNode, } from "react";
import { cookies } from 'next/headers'
// import {FetchUser} from "@/components/authentification/FetchUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkal - Analyse your LinkedIn chats",
  description: "by Simon Gneuss",
};

type RootLayoutProps = { children: ReactNode };

    //ciehe slack
export default function RootLayout({ children }: RootLayoutProps) {
    const session = cookies().get('cookie_jwt')?.value;
    console.log(session);
    //const user = await userLoader(session);
  return (
      <>
        <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
          {/*<FetchUser user={user}>{children}</FetchUser>*/}
        </ThemeProvider>
        </body>
        </html>
      </>
  )
}
