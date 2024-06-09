import { Outlet } from "react-router-dom";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function Root() {
    return (
    <div className="container flex flex-col p-4 items-center">
        <nav className="container flex  justify-between max-w-[60%] p-2 bg-slate-200">
            <h2>Rafael Rahal</h2>
            <div className="flex space-x-5 items-center">
                <h2> About </h2>
                <h2> Blog </h2>
                <MoonIcon />
                <SunIcon />
            </div>
        </nav>
        <Outlet />
    </ div>
    )
}