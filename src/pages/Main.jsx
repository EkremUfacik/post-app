import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostCard from "../components/PostCard";
import { postAdd } from "../features/postSlice";
import usePostCalls from "../hooks/usePostCalls";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { getPosts } = usePostCalls();

  useEffect(() => {
    getPosts(setPosts);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(postAdd(posts.length));
    // eslint-disable-next-line
  }, [posts]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 mt-8 py-12 px-4 w-11/12 m-auto bg-white">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Main;
