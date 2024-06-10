import { Outlet, Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function Root() {
    return (
    <div className="container flex flex-col p-4 items-center">
        <nav className="container flex  justify-between max-w-[60%] p-2 bg-slate-200">
            <Link to="/"><h2>Rafael Rahal</h2></Link>
            <div className="flex space-x-5 items-center">
                <Link to="/about">
                    <h2> About </h2>
                </Link>
                <Link to={"/blog"}>
                    <h2> Blog </h2>
                </Link>
                <MoonIcon />
                <SunIcon />
            </div>
        </nav>
        <Outlet />
    </ div>
    )
}