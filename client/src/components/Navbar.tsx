"use client";
import { FC, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
interface NavbarProps {
    headline: string;
}
const Navbar: React.FC<NavbarProps> = ({ headline }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        if (isDark) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
        setIsDark(!isDark);
    };

    const isUserUrl = pathname.includes("/user"); // checks if the current URL includes '/user'

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/");
    };

    return (
        <div className="flex justify-between">
            <div>
                <Button
                    variant="outline"
                    className="rounded-full z-50 mt-10 ml-10"
                    size="icon"
                    onClick={toggleTheme}
                >
                    {isDark ? <SunMediumIcon /> : <MoonIcon />}
                </Button>
            </div>
            <h1 className="font-bold z-50 mt-16 text-4xl">{headline}</h1>
            {isUserUrl ? (
                <a
                    onClick={handleLogout}
                    className="mt-10 z-50 mr-10 cursor-pointer"
                >
                    Logout
                </a>
            ) : (
                <Link className="mt-10 z-50 mr-10" href={"/signin"}>
                    Login
                </Link>
            )}
        </div>
    );
};

export default Navbar;
