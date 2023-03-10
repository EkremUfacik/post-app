import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useAxios = () => {
  const axiosUrl = axios.create({
    baseURL: BASE_URL,
  });

  return { axiosUrl };
};

export default useAxios;
