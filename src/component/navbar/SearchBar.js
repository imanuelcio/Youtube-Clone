import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch("");
  };
  return (
    <form className="relative" onSubmit={submitHandler}>
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
        type="text"
        placeholder="Search"
        className="border-gray-400 outline-none p-2 rounded-full text-sm w-50 sm:w-80"
        style={{ borderWidth: "1px" }}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="h-6 text-gray-400 bg-white absolute top-1 right-2" />
      </button>
    </form>
  );
};

export default SearchBar;
