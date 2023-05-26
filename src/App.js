import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/NavBar";
import { Feed } from "./component/Feed";
import VideoDetail from "./component/VideoDetail";
import SearchFeed from "./component/SearchFeed";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchInput" element={<SearchFeed />} />
      </Routes>
    </>
  );
};

export default App;
