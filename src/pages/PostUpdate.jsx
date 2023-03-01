import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdatePost from "../components/PostForm";
import useAxios from "../hooks/useAxios";

const PostUpdate = () => {
  const [data, setData] = useState([]);
  const { axiosUrl } = useAxios();
  const { id } = useParams();

  const getPost = async () => {
    const res = await axiosUrl(id);
    setData(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="w-11/12 m-auto bg-white mt-8 p-8">
      <UpdatePost data={data} setData={setData} />
    </div>
  );
};

export default PostUpdate;
