import { Outlet, Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function Root() {
    return (
        <main  className="flex flex-col items-center">
            <header className="flex flex-col items-center justify-center p-2 bg-slate-200 w-full">
                <nav className="flex justify-between max-w-[60%] w-full">
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
            </header>
        <section className="w-full  max-w-[60%]">
            <Outlet />
        </section>
        </main>
    )
}