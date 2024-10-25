'use client';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className="nav-block">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/projects" className="nav-link">
        Projects
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <Link href="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
};

export default NavMenu;
