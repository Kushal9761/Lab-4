import React from "react";

function PostForm({ newPost, onInputChange, onAddPost }) {
  return (
    <form
      className="post-form"
      onSubmit={(e) => {
        e.preventDefault();
        onAddPost();
      }}
    >
      <h2>Post Form</h2>
      <input
        className="form-group"
        type="text"
        name="title"
        value={newPost.title}
        onChange={onInputChange}
        placeholder="Title"
      />
      <input
        className="form-group"
        type="text"
        name="body"
        value={newPost.body}
        onChange={onInputChange}
        placeholder="Body"
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
