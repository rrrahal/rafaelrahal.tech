import { Outlet } from "react-router-dom";

export default function Root() {
    return (
    <>
        <h1>
            Global Layout
        </h1>
        <Outlet />
    </>
    )
}