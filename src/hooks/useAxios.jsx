import axios from "axios";
import React from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useAxios = () => {
  const axiosUrl = axios.create({
    baseURL: BASE_URL,
  });

  return { axiosUrl };
};

export default useAxios;
