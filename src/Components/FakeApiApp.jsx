import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

function FakeApiApp() {
  const [data, setData] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // To fetch posts from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      });
  }, []);

  // Input change handler for the PostForm
  const handleInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for adding a new post
  const handleAddPost = () => {
    setData([{ ...newPost, id: Date.now() }, ...data]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div>
      <PostForm
        newPost={newPost}
        onInputChange={handleInputChange}
        onAddPost={handleAddPost}
      />
      <PostsContainer posts={data} />
    </div>
  );
}

export default FakeApiApp;
