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
    const { error, saveSong, song, fetchSong } = useSongs(jwtToken, position);

    if (error) return null;

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="p-8 flex justify-between rounded border-2 border-gray-700 w-[600px]">
                        <ShowTopSong song={song} />
                        <Button
                            onClick={(event) => {
                                event.stopPropagation();
                                console.log("lol");
                            }}
                        >
                            Delete
                        </Button>{" "}
                    </div>
                </DialogTrigger>

                <DialogContent className=" sm:max-w-[500px]">
                    <DialogHeader>
                        Select the Song you want to add
                        <DialogDescription>
                            You can always change your Selection afterwards
                        </DialogDescription>
                    </DialogHeader>
                    <SpotifySearch setOpen={setOpen} saveSong={saveSong} />
                </DialogContent>
            </Dialog>
        </>
    );
};
export default SongField;
