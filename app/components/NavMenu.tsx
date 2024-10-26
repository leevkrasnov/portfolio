'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center space-x-4 md:space-x-8 lg:space-x-20">
      <Link
        href="/projects"
        className={`nav-element ${
          pathname === '/projects' ? 'text-gray-800 scale-110' : 'text-gray-700'
        }`}
      >
        Проекты
      </Link>
      <Link
        href="/about"
        className={`nav-element ${
          pathname === '/about' ? 'text-gray-800 scale-110' : 'text-gray-700'
        }`}
      >
        Обо мне
      </Link>
      <Link
        href="/contact"
        className={`nav-element ${
          pathname === '/contact' ? 'text-gray-800 scale-110' : 'text-gray-700'
        }`}
      >
        Контакты
      </Link>
    </nav>
  );
};

export default NavMenu;
