import React from "react";
import "../cssComponents/Home.css";
import CreatePost from "../components/CreatePost/CreatePost";
import DisplayPost from "../components/DisplayPost/DisplayPost";

function Home() {
  return (
    <>
      <CreatePost />
      <DisplayPost />
    </>
  );
}

export default Home;
