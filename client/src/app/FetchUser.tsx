"use client";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type FetchUserProps = {
    children: ReactNode; // This type is for any valid React children
};
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const FetchUser = ({ children }: FetchUserProps) => {
    const router = useRouter();
    const pathname: string = usePathname();
    useEffect(() => {
        (async () => {
            // Check if the current path is the home page
            if (pathname === "/" || pathname === "/signup") {
                return;
            }

            // Try to get a jwt
            let jwt =
                typeof window !== "undefined"
                    ? localStorage.getItem("token")
                    : null;

            if (!jwt) {
                router.push("/signup"); // Redirect if no JWT is found
                return;
            }

            // fetch user with fetch("/getUser") returns user based on id stored in the jwt

            try {
                const res = await fetch(`${apiUrl}/auth/getuser`, {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + jwt,
                    },
                });

                const user = await res.json();
                // Redirect based on the user's status
                console.log(user.userId);
                if (user.userId) {
                    router.push(`/user/${user.userId}`);
                    // Save user in local storage
                    localStorage.setItem("user", user.userId);
                } else {
                    router.push("/signup");
                }
            } catch (error) {
                router.push("/signup");
            }
        })();
    }, [router]); // Include dependencies in the useEffect hook

    return <>{children}</>;
};
