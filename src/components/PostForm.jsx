import React from "react";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { postInc } from "../features/postSlice";
import usePostCalls from "../hooks/usePostCalls";

const PostForm = ({ data, setData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newPost, updatePost } = usePostCalls();
  console.log(data);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.id) {
      updatePost(data);
      alert("Post Updated!");
    } else {
      newPost(data);
      alert("Post Added!");
      dispatch(postInc());
    }

    navigate(-1);
  };

  return (
    <>
      <div
        className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <HiOutlineArrowNarrowLeft className="text-xl" />
      </div>
      <form className="w-3/4 max-w-lg ml-6" onSubmit={handleSubmit}>
        <p className="font-bold my-4">Title</p>
        <textarea
          className="bg-gray-100 p-4 resize-none w-full outline-none capitalize font-semibold"
          rows="2"
          value={data?.title || ""}
          onChange={handleChange}
          name="title"
        />
        <p className="font-bold my-4">Detail</p>
        <textarea
          className="bg-gray-100 p-4 w-full outline-none"
          id=""
          rows="15"
          value={data?.body || ""}
          name="body"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 mt-3 ml-auto rounded-lg flex justify-center items-center gap-1"
        >
          {data.id ? <BiPencil /> : "+ "}
          {data.id ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default PostForm;
