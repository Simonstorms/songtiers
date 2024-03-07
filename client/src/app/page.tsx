// Use this directive to mark the component as a client component
"use client";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        fetch("http://localhost:8000/api/home")
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main>
            <h1>Hello world</h1>
        </main>
    );
}
