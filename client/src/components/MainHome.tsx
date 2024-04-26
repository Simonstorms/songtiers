import { CornerDownLeft, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type UserResponse = {
    userId: string;
};

const fetchUser = async (token: string) => {
    try {
        const res = await fetch(`${apiUrl}/auth/getuser`, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        const { userId }: UserResponse = await res.json();
        if (!userId) {
            return [new Error("something wrong with response"), null] as const;
        }
        return [null, userId] as const;
    } catch (err) {
        const error = err as Error;
        return [error, null] as const;
    }
};

const Main = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let jwt =
                typeof window !== "undefined"
                    ? localStorage.getItem("token")
                    : null;

            if (!jwt) {
                setUserId(null);
                return;
            }

            const [err, userId] = await fetchUser(jwt);

            if (err) {
                setUserId(null);
                return;
            }

            setUserId(userId);
        })();
    }, []);

    return (
        <div className=" z-50 absolute p-5 sm:p-14 bg-white-300 mt-14 rounded-md   sm:border-2 dark:border-gray-100 border-gray-900">
            <h1 className="text-2xl sm:text-4xl  font-extrabold">
                Rank your Top 5 songs
            </h1>
            <h2 className={"text-lg sm:text-xl"}>How it works:</h2>
            <div className="flex items-center">
                <CornerDownRight size={50} />
                <p className={"pt-3 pl-3"}>
                    click on the song field you want to Rank
                </p>
            </div>
            <div className="relative">
                <Image
                    src={"/songfield_dark.png"}
                    alt={"Select Song"}
                    width={400}
                    height={200}
                />
                <div className="absolute top-1/2 left-2/3 transform  -">
                    <p style={{ fontSize: "3em" }}>👆</p>
                </div>
            </div>
            <div className="flex justify-end pt-12 items-center">
                <p className={"pt-3 pr-3"}>
                    search and select your song in the input field
                </p>
                <CornerDownLeft size={50} />
            </div>
            <div className="relative">
                <Image
                    src={"/searchfield.png"}
                    alt={"Select Song"}
                    width={420}
                    height={200}
                />
                <div className="absolute top-1/3 pt-4  left-0 transform  -">
                    <p style={{ fontSize: "3em" }}>👉</p>
                </div>
            </div>
            <div className="flex justify-center items-center pt-2">
                <Link href={`${userId ? "/user/" + userId : "/signin"}`}>
                    <Button size={"lg"}>Try it out!</Button>
                </Link>
            </div>
        </div>
    );
};

export default Main;
