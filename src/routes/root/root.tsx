import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

export default function Root() {
  const [theme, setTheme] = useState("ctp-latte");
  const icon =
    theme === "ctp-latte" ? (
      <MoonIcon
        width={18}
        height={18}
        className="hover:ctp-mocha hover:text-ctp-crust"
        onClick={() => setTheme("ctp-mocha")}
      />
    ) : (
      <SunIcon
        width={18}
        height={18}
        className="hover:ctp-latte hover:text-ctp-crust"
        onClick={() => setTheme("ctp-latte")}
      />
    );

  return (
    <main className={`flex flex-col items-center ${theme} bg-ctp-base text-ctp-text min-h-screen`}>
      <header className="flex flex-col items-center justify-center p-2 w-full pt-2 px-10 md:max-w-[60%]">
        <nav className="flex justify-between w-full sm:px-5">
          <Link to="/">
            <h2 className="caveat text-2xl sm:text-3xl font-bold hover:text-ctp-blue">Rafael Rahal</h2>
          </Link>
          <div className="flex space-x-3 items-center">
            <Link className="hover:text-ctp-blue" to="/about">
              <h2> About </h2>
            </Link>
            <Separator.Root decorative orientation="vertical" className="w-px bg-ctp-surface2 h-full" />
            <Link className="hover:text-ctp-blue" to={"/blog"}>
              <h2> Blog </h2>
            </Link>
            <Separator.Root decorative orientation="vertical" className="w-px bg-ctp-surface2 h-full" />
            {icon}
          </div>
        </nav>
        <Separator.Root className="h-px bg-ctp-surface2 w-full mt-1" />
      </header>
      <section className="w-full  max-w-[60%] text-ctp-text">
        <Outlet />
      </section>
    </main>
  );
}
