import {SigninForm} from "@/components/signin_form";
import React from "react";

export default function Home(){
    return(
        <>
            <div className="flex justify-center items-center min-h-screen ">
                <SigninForm />
            </div>
        </>
    )
}