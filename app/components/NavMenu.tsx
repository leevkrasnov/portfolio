import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className="flex items-center justify-center space-x-4 md:space-x-8 lg:space-x-20">
      <Link href="/projects" className="nav-element">
        Projects
      </Link>
      <Link href="/about" className="nav-element">
        About
      </Link>
      <Link href="/contact" className="nav-element">
        Contact
      </Link>
    </nav>
  );
};

export default NavMenu;
