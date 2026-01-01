import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-start justify-between px-6 md:px-12 py-5">
        {/* Left side - Name and title */}
        <div className="title-underline">
          <Link to="/" className="block">
            <h1 className="text-sm font-medium tracking-tight">Joonhee Park</h1>
            <p className="text-sm text-muted-foreground">Graphic Designer</p>
          </Link>
        </div>

        {/* Center - Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-5">
          <svg
            width="32"
            height="48"
            viewBox="0 0 32 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform hover:scale-110 duration-300"
          >
            <path
              d="M0 0H16V16C16 24.8366 8.83656 32 0 32V0Z"
              fill="currentColor"
            />
            <path
              d="M16 16H32V32C32 40.8366 24.8366 48 16 48V16Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Right side - Navigation */}
        <nav className="flex flex-col items-end gap-0.5">
          <Link to="/about" className="nav-link text-sm font-medium flex items-center gap-1">
            About <span className="text-xs">↗</span>
          </Link>
          <Link to="/experiments" className="nav-link text-sm font-medium flex items-center gap-1">
            Experiments <span className="text-xs">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
