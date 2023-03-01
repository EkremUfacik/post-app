import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-80 h-72 flex flex-col p-4 cursor-pointer hover:shadow-md "
      onClick={() => navigate(`post/${post.id}`)}
    >
      <h2 className="font-medium text-xl capitalize pb-5">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
