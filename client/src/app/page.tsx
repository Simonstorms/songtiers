// Use this directive to mark the component as a client component
"use client";

export default function Home() {
    return (
        <main>
            <h1>Hello world</h1>
            <a href={"/signin"}>
                <button>Login</button>
            </a>
            <a href={"/signup"}>
                <button>Signup</button>
            </a>
        </main>
    );
}
