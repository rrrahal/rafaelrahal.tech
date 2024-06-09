import { Outlet } from "react-router-dom";

export default function Root() {
    return (
    <div className="container flex flex-col">
        <nav className="container flex  justify-between">
            <h2>Rafael Rahal</h2>
            <div className="flex space-x-5">
                <h2> About </h2>
                <h2> Blog </h2>
            </div>
        </nav>
        <Outlet />
    </ div>
    )
}