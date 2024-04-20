"use client";
import { useEffect, useState } from "react";
import SearchBar from "@/components/Searchbar";
import getAccessToken from "@/app/api/accessToken";

export interface Track {
    id: string;
    name: string;
    artists: Array<{ name: string }>;
}

const SearchComponent: React.FC = () => {
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
                `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenData}`,
                    },
                },
            );
            const data = await res.json();
            setSongs(data.tracks.items);
        };

        const delayDebounce = setTimeout(fetchSongs, 300);
        return () => clearTimeout(delayDebounce);
    }, [searchQuery]);

    return (
        <div>
            <SearchBar onSearch={setSearchQuery} />
            {songs.map((song) => (
                <div key={song.id}>
                    {song.name} by{" "}
                    {song.artists.map((artist) => artist.name).join(", ")}
                </div>
            ))}
        </div>
    );
};

export default SearchComponent;
