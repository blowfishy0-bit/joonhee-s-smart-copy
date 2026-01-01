import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  images: string[];
  link: string;
  size?: "small" | "medium" | "large";
  showTitle?: boolean;
  className?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  images,
  link,
  size = "medium",
  showTitle = false,
  className = "",
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sizeClasses = {
    small: "aspect-square",
    medium: "aspect-[4/5]",
    large: "aspect-[4/3]",
  };

  const getRandomIndex = useCallback((excludeIndex: number) => {
    if (images.length <= 1) return 0;
    let newIndex = excludeIndex;
    while (newIndex === excludeIndex) {
      newIndex = Math.floor(Math.random() * images.length);
    }
    return newIndex;
  }, [images.length]);

  const handleMouseEnter = () => {
    setCurrentImageIndex(prev => getRandomIndex(prev));
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(prev => getRandomIndex(prev));
  };

  return (
    <Link to={link} className={`block group ${className}`}>
      <div
        className={`project-card ${sizeClasses[size]} rounded-none`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="project-image"
        />
      </div>
      {showTitle && (
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
