import { SigninForm } from "@/components/authentification/signin_form";
import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen ">
                <SigninForm />
                <a href={"/signup"}>
                    <button>Not Registered yet?</button>
                </a>
            </div>
        </>
    );
}
