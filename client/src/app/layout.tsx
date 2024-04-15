import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {ReactNode, useEffect} from "react";
import { cookies } from 'next/headers'
import { useNavigate } from 'react-router-dom';
import {useRouter} from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkal - Analyse your LinkedIn chats",
  description: "by Simon Gneuss",
};

type RootLayoutProps = { children: ReactNode };

const verifyToken = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/verifyToken', { token });
        return response.data.isValid;
    } catch (error) {
        console.error('Error verifying token', error);
        return false;
    }

    //ciehe slack
export default function RootLayout({ children }: RootLayoutProps) {
    const router = useRouter()
    const token = cookies().get('cookie_jwt')?.value
    useEffect(() => {
        if (!token) {
            // Redirect to sign-in page if the check fails
            router.push('/sign-in');
        }
    }, [router]);
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
        </ThemeProvider>
        </body>
        </html>
      </>
  )
}
