import { ChangeEvent, FC, useState } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("");

    // Handle input change directly to trigger search
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Trigger search on every change
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Input
                type="text"
                placeholder="Search for a song..."
                value={query}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default SearchBar;
