import { SignupForm } from "@/components/authentification/signup_form";
import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen ">
                <SignupForm />
            </div>
        </>
    );
}
