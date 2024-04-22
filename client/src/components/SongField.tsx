"use client";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

import SearchComponent from "@/components/SpotifySearch";

const SongField = () => {
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
                        This is the place where the song gets displayed
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        Select the Song you want to add
                        <DialogDescription>
                            You can always change your Selection afterwards
                        </DialogDescription>
                    </DialogHeader>
                    <SearchComponent setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </>
    );
};
export default SongField;
