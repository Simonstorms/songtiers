"use client";
import { ReactNode, useEffect } from "react";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

export const WithUserProvider = (Compenent: () => ReactNode) => {
    return (props: any) => {
        const router = useRouter();
        useEffect(() => {
            let jwt =
                typeof window !== "undefined"
                    ? localStorage.getItem("token")
                    : null;

            if (!jwt) {
                router.push("/signin"); // Redirect if no JWT is found
                return;
            }
        }, []);
        //logic
        return <Compenent {...props} />;
    };
};
