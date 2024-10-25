'use client';
import Link from 'next/link';

const NavMenu = (): JSX.Element => {
  return (
    <div className="nav-block">
      <Link href="./" className="nav-link">
        Home
      </Link>
      <Link href="pages/projects" className="nav-link">
        Projects
      </Link>
      <Link href="pages/about" className="nav-link">
        About
      </Link>
      <Link href="pages/contact" className="nav-link">
        Contact
      </Link>
    </div>
  );
};

export default NavMenu;
