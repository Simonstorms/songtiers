"use client"
import React, { useState } from "react";
import { cn } from "@/utils/cn";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {useRouter} from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function SigninForm() {
    const router = useRouter(); // Initialize the router
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        //save jwt here somewhere

        try {
            const response = await fetch(`${apiUrl}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Response data:', data);
                // Store the received token
                localStorage.setItem('token', data.token);
                // Redirect to the dashboard or other appropriate page
                router.push('/dashboard'); // Adjust the path as needed
            } else {
                // Handle non-200 responses
                console.error('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
            <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                Sign in to Linkal
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Sign in with your credentials
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" onChange={handleChange} placeholder="Your username" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" onChange={handleChange} placeholder="••••••••" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-input relative group"
                    type="submit"
                >
                    Sign in &rarr;
                </button>
            </form>
        </div>
    );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
