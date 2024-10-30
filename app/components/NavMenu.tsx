"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="text-adaptive flex items-center justify-center space-x-6 md:space-x-8 lg:space-x-20">
      <Link
        href="/projects"
        className={`nav-element ${
          pathname === "/projects"
            ? "scale-110 text-gray-800 dark:text-gray-300"
            : "text-gray-700 dark:text-gray-400"
        }`}
      >
        Проекты
      </Link>
      <Link
        href="/about"
        className={`nav-element ${
          pathname === "/about"
            ? "scale-110 text-gray-800 dark:text-gray-300"
            : "text-gray-700 dark:text-gray-400"
        }`}
      >
        Обо мне
      </Link>
      <Link
        href="/contact"
        className={`nav-element ${
          pathname === "/contact"
            ? "scale-110 text-gray-800 dark:text-gray-300"
            : "text-gray-700 dark:text-gray-400"
        }`}
      >
        Контакты
      </Link>
    </nav>
  );
};

export default NavMenu;
