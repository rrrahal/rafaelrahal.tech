import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from "./routes/home/home.tsx";
import Root from "./routes/root/root.tsx";
import About from "./routes/about/about.tsx";
import PostsLayout from "./routes/blog/posts-layout.tsx";
import Sharks from "./routes/blog/posts/sharks.mdx";
import ErrorPage from "./error-page.tsx";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      <Route element={<Home />} path={"/"} />
      <Route element={<About />} path={"/about"} />
      <Route element={<PostsLayout />} path={"/blog"}>
        <Route element={<Sharks />} path={"swimming-with-sharks"} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
