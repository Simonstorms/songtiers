"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// Use apiUrl for fetching data from your Express backend

export function SignupForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        //save jwt here somewhere

        try {
            const response = await fetch(`${apiUrl}/auth/signup`, {
                // Assuming your Express route is '/api/signup'
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Response data:", data);
            // Handle response data, e.g., show a success message, redirect, etc.
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle errors, e.g., show an error message
        }
    };
    return (
        <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
            <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                Signup in to Linkal
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Sign up if you can 3^^
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
                    <LabelInputContainer>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            placeholder="Durden"
                            type="text"
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="test@code.berlin"
                        type="email"
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative  group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                </button>
            </form>
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
