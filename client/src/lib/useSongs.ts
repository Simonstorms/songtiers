import { useEffect, useState } from "react";
import { Track } from "@/components/SpotifySearch";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export type UseSongReturn =
    | {
          error: true;
          song: null;
          saveSong: null;
          fetchSong: null;
          deleteSong: null;
      }
    | {
          error: false;
          song: SongData;
          saveSong: (input: Track) => Promise<void>;
          fetchSong: () => Promise<void>;
          deleteSong: () => Promise<void>;
      };

export const useSongs = (
    token: string | null,
    position: number,
): UseSongReturn => {
    const [song, setSong] = useState<SongData | null>(null);

    useEffect(() => {
        (async () => {
            if (token) await fetchSongs();
        })();
    }, []);

    if (!token) {
        return {
            error: true,
            song: null,
            saveSong: null,
            fetchSong: null,
            deleteSong: null,
        };
    }

    const fetchSongs = async () => {
        const [err, fetchedSong] = await fetchSongsFromApi(token, position);
        if (err) {
            setSong(null);
        } else {
            setSong(fetchedSong);
        }
    };
    const addSong = async (songInput: Track) => {
        const [err, res] = await saveSong(token, songInput, position);
        if (err) {
            setSong(null);
        } else {
            await fetchSongs();
        }
    };

    const removeSong = async () => {
        const [err, res] = await deleteSong(token, position);
        if (err) {
            setSong(null);
        } else {
            await fetchSongs();
        }
    };

    return {
        error: false,
        song: song!,
        fetchSong: fetchSongs,
        saveSong: addSong,
        deleteSong: removeSong,
    };
};

export type SongData = {
    name: string;
    artist: string;
    image: string;
};

const fetchSongsFromApi = async (
    token: string,
    position: number,
): Promise<readonly [Error, null] | readonly [null, SongData]> => {
    try {
        const res = await fetch(`${apiUrl}/action/readsong`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                position: position,
            }),
        });
        const songData: SongData = await res.json();
        if (songData && songData.name && songData.artist && songData.image) {
            return [null, songData] as const;
        } else {
            return [new Error("Song validation failed"), null] as const;
        }
    } catch (err) {
        const error = err as Error;
        return [error, null] as const;
    }
};

export type AddSongResponse = {
    message: string;
};

const saveSong = async (token: string, song: Track, position: number) => {
    try {
        const response = await fetch(`${apiUrl}/action/addsong`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                songName: song.name, // Changed from songName to match server expectation
                artist: song.artists.map((artist) => artist.name).join(", "),
                image: song.album.images[0]?.url,
                position: position,
            }),
        });

        if (!response.ok) {
            return [
                new Error(`HTTP error! status: ${response.status}`),
                null,
            ] as const;
        } else {
            // Process the successful response, e.g., parse JSON, log a message, update UI
            const result: AddSongResponse = await response.json();
            return [null, result] as const;
        }
    } catch (err) {
        const error = err as Error;
        return [error, null] as const;
    }
};
const deleteSong = async (token: string, position: number) => {
    try {
        const response = await fetch(`${apiUrl}/action/deletesong`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                position: position,
            }),
        });

        if (!response.ok) {
            return [
                new Error(`HTTP error! status: ${response.status}`),
                null,
            ] as const;
        } else {
            // Process the successful response, e.g., parse JSON, log a message, update UI
            const result: AddSongResponse = await response.json();
            console.log("Song deleted successfully:", result);
            return [null, result] as const;
        }
    } catch (err) {
        const error = err as Error;
        return [error, null] as const;
    }
};
