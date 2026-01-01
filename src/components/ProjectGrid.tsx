import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "HUSH",
    subtitle: "Internship",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    link: "/project/hush",
    gridArea: "span 1 / span 1",
  },
  {
    id: 2,
    title: "AIGA LA",
    subtitle: "Motion Graphic",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    link: "/project/aiga",
    gridArea: "span 1 / span 1",
    bgColor: "hsl(221, 100%, 50%)",
  },
  {
    id: 3,
    title: "Dongdaemun Design Plaza",
    subtitle: "Brand Identity, Wayfinding Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    link: "/project/ddp",
    gridArea: "span 1 / span 1",
  },
  {
    id: 4,
    title: "Pixelscape",
    subtitle: "Brand Identity, Type Design, Generative Design",
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80",
    link: "/project/pixelscape",
    gridArea: "span 1 / span 1",
  },
  {
    id: 5,
    title: "Tracing Tongues",
    subtitle: "Web Design, Research, Brand Identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    link: "/project/tracing-tongues",
    gridArea: "span 1 / span 1",
  },
  {
    id: 6,
    title: "My WildWorld",
    subtitle: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    link: "/project/wildworld",
    gridArea: "span 1 / span 1",
  },
  {
    id: 7,
    title: "CES",
    subtitle: "Brand Identity, Installation",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    link: "/project/ces",
    gridArea: "span 1 / span 1",
  },
  {
    id: 8,
    title: "Institute for Art and Olfaction",
    subtitle: "Brand Identity, Motion Design",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    link: "/project/iao",
    gridArea: "span 1 / span 1",
    bgColor: "hsl(280, 80%, 55%)",
  },
];

const ProjectGrid = () => {
  return (
    <section className="px-6 md:px-12 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              link={project.link}
              size={index === 0 ? "medium" : "large"}
              showTitle={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
