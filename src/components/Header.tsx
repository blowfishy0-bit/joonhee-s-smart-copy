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
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform hover:scale-110 duration-300"
          >
            <text
              x="0"
              y="19"
              fill="currentColor"
              fontSize="20"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
              letterSpacing="-1"
            >
              SB
            </text>
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
