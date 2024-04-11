"use client";
import React, {useState} from "react";
import { cn } from "@/utils/cn";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// Use apiUrl for fetching data from your Express backend

export function SigninForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        try {
            const response = await fetch(`${apiUrl}/api/signin`, {  // Assuming your Express route is '/api/signin'
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Response data:', data);
            // Handle response data, e.g., show a success message, redirect, etc.
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors, e.g., show an error message
        }};
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
            Login in to Linkal
    </h2>
    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login  if you can, or sign up if you haven't
    yet
    </p>

    <form className="my-8" onSubmit={handleSubmit}>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
    <LabelInputContainer>
        <Label htmlFor="firstname">First name</Label>
    <Input id="firstname" placeholder="Tyler" type="text" onChange={handleChange} />
    </LabelInputContainer>
    <LabelInputContainer>
    <Label htmlFor="lastname">Last name</Label>
    <Input id="lastname" placeholder="Durden" type="text" onChange={handleChange}  />
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
    <Label htmlFor="email">Email Address</Label>
    <Input id="email" placeholder="test@code.berlin" type="email" onChange={handleChange}  />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
    <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="••••••••" type="password" onChange={handleChange}  />
        </LabelInputContainer>



        <button
    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
    type="submit"
        >
        Sign in &rarr;

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
