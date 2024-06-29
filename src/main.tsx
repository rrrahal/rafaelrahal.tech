import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { datadogRum } from "@datadog/browser-rum";

import Home from "./routes/home/home.tsx";
import Root from "./routes/root/root.tsx";
import About from "./routes/about/about.tsx";
import PostsLayout from "./routes/blog/posts-layout.tsx";
import Sharks from "./routes/blog/posts/sharks.mdx";
import ErrorPage from "./error-page.tsx";

datadogRum.init({
  applicationId: import.meta.env.VITE_DD_APP,
  clientToken: import.meta.env.VITE_DD_CLIENT_TOKEN,
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: "datadoghq.eu",
  service: "personal-blog",
  env: "prod",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "allow",
});
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
