"use client";
import { FC } from "react";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const SongField = dynamic(() => import("@/components/SongField"), {
    ssr: false,
});
const Page: FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center mt-20 gap-7">
                {[1, 2, 3, 4, 5].map((position) => (
                    <SongField key={position} position={position} />
                ))}
            </div>
        </>
    );
};

export default Page;
