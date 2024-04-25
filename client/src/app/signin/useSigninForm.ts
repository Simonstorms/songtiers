// Logic: useSigninForm hook

import { useRouter } from "next/navigation";
import { FormInput } from "@/components/authentification/signin_form";

export function useSigninForm() {
    const router = useRouter();

    const handleSubmit = async (formData: FormInput, setError: Function) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                },
            );

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                router.push(`user/${data.userId}`);
            } else {
                setError("password", {
                    type: "manual",
                    message: "Invalid credentials",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("password", {
                type: "manual",
                message: "Error submitting form",
            });
        }
    };

    return { handleSubmit };
}
