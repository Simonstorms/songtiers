"use client";
import { FC } from "react";
import Image from "next/image";
import { SongData } from "@/lib/useSongs";

export interface ShowTopsSongProps {
    song: SongData;
}

const ShowTopSong: FC<ShowTopsSongProps> = ({ song }) => {
    if (!song) {
        return <p>Please select a Song</p>;
    }

    return (
        <div className={"flex gap-5"}>
            <Image src={song.image} alt={song.name} height={50} width={50} />
            <div className="flex-col">
                <p>{song.name}</p>
                <p>by: {song.artist}</p>
            </div>
        </div>
    );
};

export default ShowTopSong;
