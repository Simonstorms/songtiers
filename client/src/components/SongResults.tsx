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
        <ul
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            {songs.map((song) => (
                <button
                    key={song.id}
                    onClick={async () => {
                        setOpen(false);
                        await saveSong!(song);
                    }}
                >
                    <li className={"flex  gap-3 my-4"}>
                        <Image
                            src={song.album.images[0]?.url}
                            alt={"Song Cover"}
                            height={50}
                            width={50}
                        />
                        <div className="flex-col text-left">
                            <p>
                                {song.name.length > 50
                                    ? song.name.substring(0, 50) + "..."
                                    : song.name}
                            </p>
                            <p>
                                by:{" "}
                                {(() => {
                                    const artistNames = song.artists
                                        .map((artist) => artist.name)
                                        .join(", ");
                                    return artistNames.length > 40
                                        ? artistNames.substring(0, 40) + "..."
                                        : artistNames;
                                })()}
                            </p>
                        </div>
                    </li>
                </button>
            ))}
        </ul>
    );
};

export default SongResults;
