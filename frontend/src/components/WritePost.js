import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function WritePost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const history = useHistory();

  function writePost() {
    fetch("http://127.0.0.1:9090/api/pokemons/", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        content: postContent,
      }),
    }).then((res) => {
      console.log(res);
      history.push("/");
    });
  }

  return (
    <div className="write-post">
      <form action="">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
        ></input>
        <textarea
          type="textarea"
          name="content"
          row="50"
          placeholder="Write your post here"
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        ></textarea>
        <button type="button" onClick={writePost}>
          Post
        </button>
      </form>
    </div>
  );
}
