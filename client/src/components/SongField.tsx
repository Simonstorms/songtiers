"use client";
import React, { FC, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

import ShowTopSong from "@/components/ShowTopSong";
import { useSongs } from "@/lib/useSongs";
import SpotifySearch from "@/components/SpotifySearch";
import { Button } from "@/components/ui/button";

export interface SongFieldProps {
    position: number;
}

const SongField: FC<SongFieldProps> = ({ position }) => {
    const [open, setOpen] = useState(false);
    const jwtToken =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const { error, saveSong, deleteSong, song, fetchSong } = useSongs(
        jwtToken,
        position,
    );

    if (error) return null;

    return (
        <div className="flex  rounded-xl border-2 w-[360px] sm:w-[650px] dark:border-[#FAFAFA] border-gray-700 h-20 sm:h-24">
            <div className="flex text-2xl rounded-l-[10px] font-bold w-24 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-20 items-center justify-center ">
                {position + "."}
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div
                        className={`sm:px-8 px-3 flex items-center w-[600px] sm:w-[600px] ${song ? "justify-between" : "justify-center"}`}
                    >
                        <ShowTopSong song={song} />

                        {song && (
                            <Button
                                className="mobile-button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    deleteSong();
                                }}
                            >
                                {window.innerWidth <= 768 ? "X" : "Delete"}
                            </Button>
                        )}
                    </div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        Select the Song you want to add
                        <DialogDescription>
                            You can always change your Selection afterwards
                        </DialogDescription>
                    </DialogHeader>
                    <SpotifySearch setOpen={setOpen} saveSong={saveSong} />
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default SongField;
