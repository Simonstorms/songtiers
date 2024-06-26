"use client";
import { SigninForm } from "@/components/authentification/signin_form";
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { WithSigninProvider } from "@/components/authentification/WithSigninProvider";

const Page = () => {
    return (
        <>
            <Navbar headline={"Signin"} />
            <div className="flex justify-center mt-20">
                <div className="inline-flex px-16 py-10 rounded-xl border-0 sm:border-2 flex-col gap-5 items-center">
                    <SigninForm />
                    <Link href={"/signup"}>Not Registered yet?</Link>
                </div>
            </div>
        </>
    );
};

export default WithSigninProvider(Page);
