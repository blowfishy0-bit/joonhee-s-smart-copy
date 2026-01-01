import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-start justify-between px-6 md:px-12 py-5">
        {/* Left side - Name and title */}
        <div className="title-underline">
          <Link to="/" className="block">
            <h1 className="text-sm font-medium tracking-tight">Sophie Brenner</h1>
            <p className="text-sm text-muted-foreground">Interactive Designer</p>
          </Link>
        </div>

        {/* Center - SB Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-5">
          <svg
            width="36"
            height="44"
            viewBox="0 0 36 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform hover:scale-110 duration-300"
          >
            {/* S - top left */}
            <path
              d="M0 8C0 3.58 3.58 0 8 0H16V8C16 12.42 12.42 16 8 16H0V8Z"
              fill="currentColor"
            />
            <path
              d="M0 20H8C12.42 20 16 23.58 16 28V36H8C3.58 36 0 32.42 0 28V20Z"
              fill="currentColor"
            />
            {/* B - bottom right */}
            <path
              d="M20 8C20 3.58 23.58 0 28 0H36V16H28C23.58 16 20 12.42 20 8Z"
              fill="currentColor"
            />
            <path
              d="M20 20H28C32.42 20 36 23.58 36 28C36 32.42 32.42 36 28 36H20V20Z"
              fill="currentColor"
            />
            <path
              d="M20 36V44H28C32.42 44 36 40.42 36 36H20Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Right side - Navigation */}
        <nav className="flex flex-col items-end gap-0.5">
          <Link to="/about" className="nav-link text-sm font-medium flex items-center gap-1">
            About <span className="text-xs">↗</span>
          </Link>
          <Link to="/contact" className="nav-link text-sm font-medium flex items-center gap-1">
            Contact <span className="text-xs">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
