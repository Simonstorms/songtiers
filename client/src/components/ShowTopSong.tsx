"use client";
import { FC, useEffect, useState } from "react";
import { SongFieldProps } from "@/components/SongField";
import Image from "next/image";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ShowTopSong: FC<SongFieldProps> = ({ position }) => {
    const jwt_token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const [song, setSong] = useState(null);

    useEffect(() => {
        (async () => {
            if (!jwt_token) {
                console.log("user not logged in");
                return;
            }
            try {
                const res = await fetch(`${apiUrl}/action/readsong`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt_token}`,
                    },
                    body: JSON.stringify({
                        position: position,
                    }),
                });
                const songData = await res.json();
                if (
                    songData &&
                    songData.name &&
                    songData.artist &&
                    songData.image
                ) {
                    setSong(songData);
                    console.table(songData);
                } else {
                }
            } catch (err) {}
        })();
    }, [position]);

    if (!song) {
        return <p>Please select a Song</p>;
    }

    return (
        <div className={"flex"}>
            <p>{song.name}</p>
            <p>{song.artist}</p>
            <Image src={song.image} alt={song.name} height={50} width={50} />
        </div>
    );
};

export default ShowTopSong;
