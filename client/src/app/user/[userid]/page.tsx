import { FC } from "react";
import SearchComponent from "@/components/SpotifySearch";

const Page: FC = () => {
    return (
        <div className="flex flex-col gap-10 items-center">
            <h1 className="font-bold mt-16 text-4xl">
                Select your Top 5 Songs
            </h1>
            <div className="w-[600px]">
                <SearchComponent />
            </div>
        </div>
    );
};

export default Page;
