import React , { useState}from "react";
import "../cssComponents/Home.css";
import CreatePost from "../components/CreatePost/CreatePost";
import DisplayPost from "../components/DisplayPost/DisplayPost";


function Home() {

  const [posts, setPosts] = useState([]);
  const username = localStorage.getItem("username"); 

  return (
    <>
      <CreatePost setPosts={setPosts} posts={posts}/>
      <DisplayPost username= {username} setPosts={setPosts} posts={posts} />
      
    </>
  );
}

export default Home;
