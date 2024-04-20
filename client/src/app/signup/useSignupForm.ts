"use client";

import { useRouter } from "next/navigation";

// Updated structure for the form data to include first and last name
interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string; // Include confirmPassword in the FormData
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Cast as string to handle undefined

export function useSignupForm() {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        console.log(formData);
        // Prepare the data to be sent to the API
        const { confirmPassword, ...dataToSend } = formData; // Remove confirmPassword before sending
        try {
            const response = await fetch(`${apiUrl}/auth/signup`, {
                // Changed to signup endpoint
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Response data:", data);
                localStorage.setItem("token", data.token);
                router.push(`/user/${data.userId}`); // Redirect user to dashboard or appropriate page
            } else {
                console.error("Signup failed:", data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return { handleSubmit };
}
