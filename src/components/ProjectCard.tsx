import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  size?: "small" | "medium" | "large";
  showTitle?: boolean;
  className?: string;
  bgColor?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  image,
  link,
  size = "medium",
  showTitle = false,
  className = "",
  bgColor,
}: ProjectCardProps) => {
  const sizeClasses = {
    small: "aspect-square",
    medium: "aspect-[4/5]",
    large: "aspect-[4/3]",
  };

  return (
    <Link to={link} className={`block group ${className}`}>
      <div
        className={`project-card ${sizeClasses[size]} rounded-none`}
        style={bgColor ? { backgroundColor: bgColor } : undefined}
      >
        <img
          src={image}
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
