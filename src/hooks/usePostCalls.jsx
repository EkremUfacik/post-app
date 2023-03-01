import { useDispatch } from "react-redux";
import { postDec } from "../features/postSlice";
import useAxios from "./useAxios";

const usePostCalls = () => {
  const user_id = 1;
  const { axiosUrl } = useAxios();
  const dispatch = useDispatch();

  const getPosts = async (setPosts) => {
    const res = await axiosUrl.get(`?userId=${user_id}`);
    setPosts(res.data);
  };

  const newPost = async (data) => {
    await axiosUrl.post("", data);
  };

  const updatePost = async (data) => {
    await axiosUrl.put(`${data.id}`, data);
  };

  const getPostDetail = async (id, setPostInfo) => {
    const res = await axiosUrl(id);
    setPostInfo(res.data);
  };

  const deletePost = async (id) => {
    await axiosUrl.delete(id);
    dispatch(postDec());
    alert("Post Deleted!");
  };

  const getComment = async (id, setCommentsInfo) => {
    const res = await axiosUrl(`${id}/comments`);
    setCommentsInfo(res.data);
  };

  return {
    getPosts,
    getPostDetail,
    newPost,
    updatePost,
    deletePost,
    getComment,
  };
};

export default usePostCalls;
