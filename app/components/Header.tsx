import NavMenu from "./NavMenu";
import { House } from "lucide-react";
import Link from "next/link";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

const Header = () => {
  return (
    <header className="nav-block">
      <Link href="./" className="nav-element">
        <House
          strokeWidth={1}
          className="h-6 w-6 text-gray-800 dark:text-gray-300 md:h-8 md:w-8 lg:h-10 lg:w-10"
        />
      </Link>

      <NavMenu />

      <div className="flex items-center justify-end space-x-3 md:space-x-6">
        <ThemeToggleSwitch />
        {/* <button aria-label="Change Language" className="nav-element">
          <Globe
            strokeWidth={1.2}
            className="h-4 w-4 text-gray-800 dark:text-gray-400 md:h-6 md:w-6 lg:h-7 lg:w-7"
          />
        </button> */}
      </div>
    </header>
  );
};

export default Header;
