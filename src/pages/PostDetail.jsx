import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import usePostCalls from "../hooks/usePostCalls";

const PostDetail = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState([]);
  const [commentsInfo, setCommentsInfo] = useState([]);
  const navigate = useNavigate();
  const { getPostDetail, deletePost, getComment } = usePostCalls();

  useEffect(() => {
    getPostDetail(id, setPostInfo);
    getComment(id, setCommentsInfo);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-11/12 m-auto bg-white mt-8">
      <div
        className="p-8 w-3/4 max-w-2xl min-w-sm"
        style={{ minWidth: "26rem" }}
      >
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => navigate("/")}
            >
              <HiOutlineArrowNarrowLeft className="text-xl" />
            </div>
            <p className="font-semibold">Posts</p>
          </div>

          <button
            className="bg-blue-600 text-white px-4 rounded-lg"
            onClick={() => navigate("/newpost")}
          >
            + New Post
          </button>
        </div>

        <div className="ml-6 py-4">
          <div>
            <h3 className="font-bold">Title</h3>
            <div className="font-bold bg-gray-100 capitalize py-8 px-6">
              {postInfo.title}
            </div>
            <h3 className="font-bold">Detail</h3>
            <div className="bg-gray-100 p-3 h-40 px-6">{postInfo.body}</div>
          </div>

          <div className="text-end mt-12 flex gap-4 justify-end items-center">
            <button
              className="bg-red-600 text-white px-4 py-1 rounded-lg  flex justify-center items-center gap-1"
              onClick={() => deletePost(id)}
            >
              <RiDeleteBin6Line /> Delete
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded-lg flex justify-center items-center gap-1"
              onClick={() => navigate(`/update-blog/${id}`)}
            >
              <BiPencil /> Update
            </button>
          </div>

          <h2 className="font-bold text-xl my-4">Comments</h2>
          <div className="bg-gray-200 pb-4">
            {commentsInfo?.map((comment, index) => (
              <div key={index}>
                <h4 className="font-bold p-2">{comment.name}</h4>
                <div className="bg-white p-3 mx-4 rounded-lg">
                  {comment.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
