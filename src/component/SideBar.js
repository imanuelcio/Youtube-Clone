import React from "react";
import { categories } from "../utils/Utility";

const SideBar = ({ setSelectCategory, selectCategory, setVideos }) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <button
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            key={i}
            className="flex p-2 flex-rowitems-center sm:justify-start sm:py-3 sm:px-4"
            style={{
              backgroundColor:
                selectCategory === category.name ? "red" : "white",
              color: selectCategory === category.name ? "white" : "black",
            }}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
