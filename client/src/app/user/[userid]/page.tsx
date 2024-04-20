import React from "react";
import SearchComponent from "@/components/SpotifySearch";

const Page: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <SearchComponent />
        </div>
    );
};

export default Page;
