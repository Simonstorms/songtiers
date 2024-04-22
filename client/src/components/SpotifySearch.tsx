"use client";
import { FC, useEffect, useState } from "react";
import SearchBar from "@/components/Searchbar";
import getAccessToken from "@/app/api/accessToken";
import Image from "next/image";
import SongResults from "@/components/SongResults";

export interface Track {
    id: string;
    name: string;
    artists: Array<{ name: string }>;
    album: {
        images: Array<{ url: string; height: number; width: number }>;
    };
}

const SearchComponent: FC<{ setOpen: (open: boolean) => void }> = ({
    setOpen,
}) => {
    const [songs, setSongs] = useState<Track[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchSongs = async () => {
            if (searchQuery.trim() === "") {
                setSongs([]);
                return; // Clears the displayed songs if the search query is empty
            }

            let tokenData = await getAccessToken();
            if (tokenData === null) {
                console.error("Failed to get access token");
                return;
            }

            const res = await fetch(
                `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=5`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenData}`,
                    },
                },
            );
            const data = await res.json();
            setSongs(data.tracks.items);
        };

        const delayDebounce = setTimeout(fetchSongs, 30);
        return () => clearTimeout(delayDebounce);
    }, [searchQuery]);

    return (
        <div className={" "}>
            <SearchBar onSearch={setSearchQuery} />
            <SongResults setOpen={setOpen} songs={songs} />
        </div>
    );
};

export default SearchComponent;
