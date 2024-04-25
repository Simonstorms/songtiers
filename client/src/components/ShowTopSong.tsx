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
            <Image src={song.image} alt={song.name} height={40} width={50} />
            <div className="flex-col">
                <p>
                    {window.innerWidth <= 768 && song.name.length > 22
                        ? `${song.name.substring(0, 20)}...`
                        : song.name}
                </p>
                <p>
                    {window.innerWidth <= 768 && song.artist.length > 22
                        ? `by: ${song.artist.substring(0, 20)}...`
                        : `by: ${song.artist}`}
                </p>
            </div>
        </div>
    );
};

export default ShowTopSong;
