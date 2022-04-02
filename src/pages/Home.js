import React, { useState } from "react";
import "../cssComponents/Home.css";
import CreatePost from "../components/CreatePost/CreatePost";
import DisplayPost from "../components/DisplayPost/DisplayPost";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Home() {

  const [posts, setPosts] = useState([])
  const username = localStorage.getItem("username")
  const token = localStorage.getItem("token")

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("userId")
    navigate("/login")
  }

  return (

      token ? 

    (
      <>
      <div className="navBar">
      <button className="logout-button" onClick={handleLogout}>
        logout
      </button>
      <button className="profil-button" onClick={handleLogout}>
        profil
      </button>
      </div>
      <CreatePost setPosts={setPosts} posts={posts} />
      <DisplayPost
        username={username}
        setPosts={setPosts}
        posts={posts}
        token={token}
      />
    </> ) : (
            <Navigate to="/login" replace={true} />
        )
  );
}

export default Home;
