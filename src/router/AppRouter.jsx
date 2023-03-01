import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import PostDetail from "../pages/PostDetail";
import PostCreate from "../pages/PostCreate";
import PostUpdate from "../pages/PostUpdate";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/newpost" element={<PostCreate />} />
        <Route path="/update-blog/:id" element={<PostUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
