import { FC } from "react";
import { SongFieldProps } from "@/components/SongField";

const ShowTopSong: FC<SongFieldProps> = ({ position }) => {
    return <p>{position}</p>;
};

export default ShowTopSong;
