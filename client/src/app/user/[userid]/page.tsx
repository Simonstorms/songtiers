"use client";
import { FC, useEffect, useState } from "react";
import SpotifyComponentProps from "@/components/SpotifySearch";
import SongResults from "@/components/SongResults";
import SongField from "@/components/SongField";
import { useSongs } from "@/lib/useSongs";

const Page: FC = () => {
    const jwtToken =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
    
    return (
        <div className="flex flex-col gap-10 items-center">
            <h1 className="font-bold mt-16 text-4xl">
                Select your Top 5 Songs
            </h1>
            <div className="w-[600px] flex flex-col gap-5">
                <SongField position={1} />
                <SongField position={2} />
                <SongField position={3} />
                <SongField position={4} />
                <SongField position={5} />
            </div>
        </div>
    );
};

export default Page;
