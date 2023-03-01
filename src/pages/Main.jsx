import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import useAxios from "../hooks/useAxios";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const { axiosUrl } = useAxios();
  const user_id = 1;

  const getPosts = async () => {
    const res = await axiosUrl.get(`?userId=${user_id}`);
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 mt-8 py-12 px-4 w-11/12 m-auto bg-white">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Main;
