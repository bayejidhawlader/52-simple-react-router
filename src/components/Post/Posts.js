import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2>Here are All of posts</h2>
      {posts.map((post) => (
        <Post key={post} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
