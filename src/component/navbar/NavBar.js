import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/Utility";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="bg-white flex w-screen justify-between px-4 items-center sticky top-0 py-1">
      <Link to={"/"}>
        <img src={logo} alt="youtube-logo" className="h-10" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
