import { Outlet, Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import * as Switch from "@radix-ui/react-switch";
import { datadogRum } from "@datadog/browser-rum";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Root() {
  const [theme, setTheme] = useLocalStorage("ctp-latte", "theme-value");
  const icon =
    theme === "ctp-latte" ? (
      <MoonIcon width={18} height={18} />
    ) : (
      <SunIcon width={18} height={18} className="ctp-latte fill-bg-ctp-base" />
    );

  const handleThemeSwitch = () => {
    if (theme === "ctp-latte") {
      setTheme("ctp-mocha");
      datadogRum.addAction("Theme changed", {
        newValue: "dark theme"
      })

    } else {
      setTheme("ctp-latte");
      datadogRum.addAction("Theme changed", {
        newValue: "light theme"
      })
    }
  };

  return (
    <main className={`flex flex-col items-center ${theme} bg-ctp-base text-ctp-text min-h-screen md:px-0 px-3`}>
      <header className="flex flex-col items-center justify-center p-2 w-full pt-2 md:max-w-max-text">
        <nav className="flex justify-between w-full sm:px-5">
          <Link to="/">
            <h4 className="caveat text-2xl sm:text-3xl font-bold hover:text-ctp-blue">Rafael Rahal</h4>
          </Link>
          <div className="flex space-x-3 items-center">
            <Link className="hover:text-ctp-blue" to="/about">
              <h4> About </h4>
            </Link>
            <Separator.Root decorative orientation="vertical" className="w-px bg-ctp-surface2 h-full" />
            <Switch.Root
              className={`w-[42px] h-[25px] rounded-full relative shadow-[0_1px_2px] outline-none bg-ctp-mantle`}
              checked={theme === "ctp-mocha"}
              onCheckedChange={() => handleThemeSwitch()}
            >
              <Switch.Thumb className="absolute left-0 bottom-0 right-0 top-0 w-[21px] h-[21px] rounded-full shadow-[0_1px_1px] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]">
                <div className="flex justify-center items-center h-full">{icon}</div>
              </Switch.Thumb>
            </Switch.Root>
          </div>
        </nav>
        <Separator.Root className="h-px bg-ctp-surface2 w-full mt-1" />
      </header>
      <section className="w-full md:max-w-max-text text-ctp-text mt-12">
        <Outlet />
      </section>
    </main>
  );
}
