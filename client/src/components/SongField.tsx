"use client";
import React, { FC, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

import SearchComponent from "@/components/SpotifySearch";
import ShowTopSong from "@/components/ShowTopSong";

export interface SongFieldProps {
    position: number;
}
const SongField: FC<SongFieldProps> = ({ position }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button
                        className={
                            "py-8 rounded border-2 border-gray-700 w-[600px]"
                        }
                    >
                        <ShowTopSong position={position} />
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        Select the Song you want to add
                        <DialogDescription>
                            You can always change your Selection afterwards
                        </DialogDescription>
                    </DialogHeader>
                    <SearchComponent setOpen={setOpen} position={position} />
                </DialogContent>
            </Dialog>
        </>
    );
};
export default SongField;
