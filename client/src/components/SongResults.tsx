import { Track } from "@/components/SpotifySearch";
import { FC } from "react";
import Image from "next/image";

interface SongResultsProps {
    songs: Track[];
    setOpen: (open: boolean) => void;
    saveSong: (input: Track) => Promise<void>;
}

const SongResults: FC<SongResultsProps> = ({ songs, setOpen, saveSong }) => {
    return (
        <ul>
            {songs.map((song) => (
                <button
                    onClick={async () => {
                        setOpen(false);
                        await saveSong!(song);
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
