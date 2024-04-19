// Use this directive to mark the component as a client component
"use client";
import { useTheme } from "next-themes";

export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <main>
            <h1>Hello world</h1>
            <a href={"/signin"}>
                <button>Login</button>
            </a>
            <a href={"/signup"}>
                <button>Signup</button>
            </a>
            <div>
                The current theme is: {theme}
                <button onClick={() => setTheme("light")}>Light Mode</button>
                <button onClick={() => setTheme("dark")}>Dark Mode</button>
            </div>
        </main>
    );
}
