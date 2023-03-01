import React, { useState } from "react";
import UpdatePost from "../components/PostForm";

const PostCreate = () => {
  const initialData = {
    title: "",
    body: "",
  };
  const [data, setData] = useState(initialData);

  return (
    <div className="w-11/12 m-auto bg-white mt-8 p-8">
      <UpdatePost data={data} setData={setData} />
    </div>
  );
};

export default PostCreate;
