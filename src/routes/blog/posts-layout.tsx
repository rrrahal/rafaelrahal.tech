import { Outlet } from "react-router-dom";

export default () => {
  return <article className="flex flex-col justify-center items-center gap-4">{<Outlet />}</article>;
};
