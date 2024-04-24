import { FC, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunMediumIcon } from "lucide-react";

const Navbar: FC = () => {
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

    return (
        <div className="flex justify-between">
            <div>
                <Button
                    variant="outline"
                    className="rounded-full mt-10 ml-10"
                    size="icon"
                    onClick={toggleTheme}
                >
                    {isDark ? <SunMediumIcon /> : <MoonIcon />}
                </Button>
            </div>
            <h1 className="font-bold mt-16 text-4xl">
                Select your Top 5 Songs
            </h1>
            <a href={"/signin"}>
                <button>Login</button>
            </a>
        </div>
    );
};

export default Navbar;
