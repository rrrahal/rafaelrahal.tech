import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function Root() {
    const [theme, setTheme] = useState("ctp-latte")
    const icon = theme === "ctp-latte" ?
        <MoonIcon onClick={() => setTheme("ctp-mocha")} /> :
        <SunIcon onClick={() => setTheme("ctp-latte")} />

    return (
        <main  className={`flex flex-col items-center ${theme} bg-ctp-base text-ctp-text min-h-screen`}>
            <header className="flex flex-col items-center justify-center p-2 bg-ctp-crust w-full">
                <nav className="flex justify-between max-w-[60%] w-full">
                    <Link to="/"><h2>Rafael Rahal</h2></Link>
                    <div className="flex space-x-5 items-center">
                        <Link to="/about">
                            <h2> About </h2>
                        </Link>
                        <Link to={"/blog"}>
                            <h2> Blog </h2>
                        </Link>
                        {icon}
                    </div>
                </nav>
            </header>
        <section className="w-full  max-w-[60%] text-ctp-text">
            <Outlet />
        </section>
        </main>
    )
}