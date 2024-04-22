import { Track } from "@/components/SpotifySearch";
import { FC } from "react";
import Image from "next/image";
import { saveSong } from "@/lib/saveSong";

interface SongResultsProps {
    songs: Track[];
    setOpen: (open: boolean) => void;
}

const SongResults: FC<SongResultsProps> = ({ songs, setOpen }) => {
    return (
        <ul>
            {songs.map((song) => (
                <button
                    onClick={() => {
                        setOpen(false);
                        saveSong(song);
                    }}
                >
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
                </button>
            ))}
        </ul>
    );
};

export default SongResults;
