"use client";
import React, { FC, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

import SpotifyComponentProps from "@/components/SpotifySearch";
import ShowTopSong from "@/components/ShowTopSong";
import { useSongs } from "@/lib/useSongs";
import SpotifySearch from "@/components/SpotifySearch";

export interface SongFieldProps {
    position: number;
}

const SongField: FC<SongFieldProps> = ({ position }) => {
    const [open, setOpen] = useState(false);
    const jwtToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const { error, saveSong, song, fetchSong } = useSongs(jwtToken, position);

    if (error)
        return null;

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button
                        className={
                            "py-8 rounded border-2 border-gray-700 w-[600px]"
                        }
                    >
                        <ShowTopSong song={song} />
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        Select the Song you want to add
                        <DialogDescription>
                            You can always change your Selection afterwards
                        </DialogDescription>
                    </DialogHeader>
                    <SpotifySearch setOpen={setOpen} saveSong={saveSong}/>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default SongField;
