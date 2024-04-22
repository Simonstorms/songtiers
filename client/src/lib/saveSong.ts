"use client";
import { Track } from "@/components/SpotifySearch";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const jwt_token = localStorage.getItem("token");

export const saveSong = async (song: Track, position: number) => {
    if (!jwt_token) {
        console.log("user not logged in");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/action/addsong`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt_token}`,
            },
            body: JSON.stringify({
                songName: song.name, // Changed from songName to match server expectation
                artist: song.artists.map((artist) => artist.name).join(", "),
                image: song.album.images[0]?.url,
                position: position,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            // Process the successful response, e.g., parse JSON, log a message, update UI
            const result = await response.json();
            console.log("Song saved successfully:", result);
        }
    } catch (err) {
        console.error("There was an error saving the song: ", err);
        // Optionally, handle errors more comprehensively here
    }
};
export default saveSong;
