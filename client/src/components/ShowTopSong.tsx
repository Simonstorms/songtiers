"use client";
import { FC, useEffect, useState } from "react";
import { SongFieldProps } from "@/components/SongField";
import Image from "next/image";
import { SongData, useSongs } from "@/lib/useSongs";


export interface ShowTopsSongProps {
    song: SongData;
}

const ShowTopSong: FC<ShowTopsSongProps> = ({ song}) => {

    if (!song) {
        return <p>Please select a Song</p>
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
