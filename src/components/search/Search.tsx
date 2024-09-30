import SearchIcon from "@mui/icons-material/Search";
import SearchMenu from "./SearchMenu";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-transparent border-none outline-none text-gray-700 dark:text-gray-200 px-2"
          placeholder="Search..."
        />
        <SearchIcon className="text-gray-500 dark:text-gray-400" />
      </div>

      {searchTerm && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50">
          <SearchMenu />
        </div>
      )}
    </div>
  );
}
