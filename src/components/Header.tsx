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
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform hover:scale-110 duration-300"
          >
            {/* S letter - stylized */}
            <path
              d="M4 12C4 8 7 5 12 5C17 5 19 8 19 11C19 14 17 16 14 17L19 17C19 17 20 19 20 21C20 25 17 28 11 28C5 28 3 25 3 22H7C7 24 9 25 11 25C14 25 16 23 16 21C16 19 14 18 11 18H8V15H12C14 15 15 14 15 12C15 10 14 8 12 8C9 8 8 10 8 12H4Z"
              fill="currentColor"
            />
            {/* B letter - stylized */}
            <path
              d="M22 5H30C34 5 37 7 37 11C37 13 36 15 34 16C36 17 38 19 38 22C38 26 35 28 30 28H22V5ZM26 15H29C31 15 33 14 33 12C33 10 31 8 29 8H26V15ZM26 25H30C32 25 34 24 34 21C34 19 32 18 30 18H26V25Z"
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
