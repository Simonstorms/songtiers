import { SignupForm } from "@/components/authentification/signup_form";
import React from "react";
import Navbar from "@/components/Navbar";
import { SigninForm } from "@/components/authentification/signin_form";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Navbar headline={"Signup"} />
            <div className="flex justify-center mt-5 sm:mt-32">
                <div className="inline-flex px-16 py-10 rounded-xl border-0 sm:border-2 flex-col gap-5 items-center">
                    <SignupForm />
                    <Link href={"/signin"}>You are a User?</Link>
                </div>
            </div>
        </>
    );
}
