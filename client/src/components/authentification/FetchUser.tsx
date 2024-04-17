"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type FetchUserProps = {
    children: ReactNode; // This type is for any valid React children
};

export const FetchUser = ({ children }: FetchUserProps) => {
    const router = useRouter();


    useEffect(() => {
        (async () => {

            //try to get a jwt
            let jwt = localStorage.getItem("jwt");

            if (!jwt) {
                router.push("/signup"); // Redirect if no JWT is found
                return
            }



            // fetch user with fetch("/getUser") returns user based on id stored in the jwt

            try{
                const res = await fetch('url', {
                    headers: {
                        "Authorization": "Bearer " + jwt
                    }
                })

                const user = await res.json()
                // Redirect based on the user's status
                if (user){
                    router.push(`/${user}`);
                    // safe user in local storage
                    localStorage.setItem('user',user);
                } else {
                    router.push("/login");
                }
            }catch(error){
                router.push("/login");
            }



        })()

    }, [router]); // Include dependencies in the useEffect hook

    return <>{children}</>;
};
