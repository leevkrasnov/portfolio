import NavMenu from './NavMenu';
import { House, Globe } from 'lucide-react';
import Link from 'next/link';
import ThemeToggleSwitch from './ThemeToggleSwitch';

const Header = () => {
  return (
    <header className="nav-block">
      <Link href="./" className="nav-element">
        <House
          strokeWidth={1}
          className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
        />
      </Link>

      <NavMenu />

      <div className="flex justify-end items-center space-x-3 md:space-x-6">
        <ThemeToggleSwitch />
        <button aria-label="Change Language" className="nav-element">
          <Globe strokeWidth={1.2} className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
