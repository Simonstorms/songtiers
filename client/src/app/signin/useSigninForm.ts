"use client";

import { useRouter } from "next/navigation";

// Define the structure for the form data
interface FormData {
    email: string;
    password: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Cast as string to handle undefined

export function useSigninForm() {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        console.log(formData);
        try {
            const response = await fetch(`${apiUrl}/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Response data:", data);
                localStorage.setItem("token", data.token);
                router.push(`user/${data.userId}`); // Assuming 'simon' is a placeholder
            } else {
                console.error("Login failed:", data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return { handleSubmit };
}
