import { Track } from "@/components/SpotifySearch";
import { FC } from "react";
import Image from "next/image";

interface SongResultsProps {
    songs: Track[];
}

const SongResults: FC<SongResultsProps> = ({ songs }) => {
    return (
        <ul>
            {songs.map((song) => (
                <li key={song.id} className={"flex gap-3 my-4"}>
                    <Image
                        src={song.album.images[0]?.url}
                        alt={"Song Cover"}
                        height={50}
                        width={50}
                    />
                    {song.name} by{" "}
                    {song.artists.map((artist) => artist.name).join(", ")}
                </li>
            ))}
        </ul>
    );
};

export default SongResults;
