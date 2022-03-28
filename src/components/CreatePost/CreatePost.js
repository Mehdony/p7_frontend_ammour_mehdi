import React, { useState } from "react";
import "./CreatePost.css";
import axios from "axios";


export default function CreatePost() {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  console.log(selectedFile)
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  console.log(userId, username, token)

  const post = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let form = new FormData();
    form.append("userId", userId);
    form.append("image", selectedFile);
    form.append("name", username);
    form.append("description", content);
    form.append("published", true);
    const response = await axios.post('http://localhost:8080/api/tutorials', form, config) 
    console.log(response)
    setContent ("")
    setSelectedFile("")
  };

  return (
    <>
      <form className="InputForm" typeof="post">
        <div className="form-group purple-border textAreaForm">
          <label for="exampleFormControlTextarea4"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea4"
            rows="5"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>
        </div>

        <div className="fileAndBtn">
          <label for="formFileMultiple" className="form-label">
            {" "}
          </label>


          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={(e) => {
              setSelectedFile(e.target.files[0])
            }}

          />
          <div className="btnFormContainer">
            <button
              onClick={(e) => {
                post(e);
              }}
              className="btn btn-primary"
            >
              Publier
            </button>
          </div>
        </div>
      </form>
    </>
  );
}