"use client";

import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="w-full py-2 transition border rounded-full shadow-sm cursor-pointer md:w-auto hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="flex-1 hidden px-6 text-sm font-semibold text-center sm:block border-x">
          Any Week
        </div>
        <div className="flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <HiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
