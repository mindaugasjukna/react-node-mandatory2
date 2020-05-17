import React, { useState, useEffect } from "react";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9090/api/pokemons/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="pokemons">
      <h1>Blog Posts</h1>
      <div className="posts-list">
        {posts.map((item) => (
          <div className="blog-post">
            <h3>{item.pokemon_title}</h3>
            <h4>{item.pokemon_type}</h4>
            <p>{item.pokemon_desc}</p>
            <p>
              By: {item.user.first_name} {item.user.last_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
