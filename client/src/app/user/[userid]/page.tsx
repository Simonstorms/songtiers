import { FC } from "react";
import SearchComponent from "@/components/SpotifySearch";
import SongResults from "@/components/SongResults";
import SongField from "@/components/SongField";

const Page: FC = () => {
    return (
        <div className="flex flex-col gap-10 items-center">
            <h1 className="font-bold mt-16 text-4xl">
                Select your Top 5 Songs
            </h1>
            <div className="w-[600px] flex flex-col gap-5">
                <SongField />
                <SongField />
                <SongField />
                <SongField />
                <SongField />
            </div>
        </div>
    );
};

export default Page;
