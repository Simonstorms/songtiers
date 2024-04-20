import { Track } from "@/components/SpotifySearch";

interface SongResultsProps {
    songs: Track[];
}

const SongResults: React.FC<SongResultsProps> = ({ songs }) => {
    return (
        <ul>
            {songs.map((song) => (
                <li key={song.id}>
                    {song.name} by{" "}
                    {song.artists.map((artist) => artist.name).join(", ")}
                </li>
            ))}
        </ul>
    );
};

export default SongResults;
