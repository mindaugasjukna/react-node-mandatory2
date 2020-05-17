import React, { useState, useEffect } from "react";

export default function UserPosts() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9090/api/pokemons/getallpokemons", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("hello");
        console.log(data);
        setUserPosts(data);
      });
  }, []);

  return (
    <div className="user-posts">
      <h1>My Posts</h1>
      <div className="posts-list">
        {userPosts.map((item) => (
          <div className="user-post">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p>
              By: {item.user.first_name} {item.user.last_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
