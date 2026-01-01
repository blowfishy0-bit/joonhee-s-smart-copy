import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "HUSH",
    subtitle: "Internship",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339bbe3c5c?w=800&q=80",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    ],
    link: "/project/hush",
  },
  {
    id: 2,
    title: "AIGA LA",
    subtitle: "Motion Graphic",
    images: [
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    ],
    link: "/project/aiga",
  },
  {
    id: 3,
    title: "Dongdaemun Design Plaza",
    subtitle: "Brand Identity, Wayfinding Design",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    ],
    link: "/project/ddp",
  },
  {
    id: 4,
    title: "Pixelscape",
    subtitle: "Brand Identity, Type Design, Generative Design",
    images: [
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    ],
    link: "/project/pixelscape",
  },
  {
    id: 5,
    title: "Tracing Tongues",
    subtitle: "Web Design, Research, Brand Identity",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      "https://images.unsplash.com/photo-1523821741446-edb2b68a7e01?w=800&q=80",
    ],
    link: "/project/tracing-tongues",
  },
  {
    id: 6,
    title: "My WildWorld",
    subtitle: "UI/UX Design",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&q=80",
    ],
    link: "/project/wildworld",
  },
  {
    id: 7,
    title: "CES",
    subtitle: "Brand Identity, Installation",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    link: "/project/ces",
  },
  {
    id: 8,
    title: "Institute for Art and Olfaction",
    subtitle: "Brand Identity, Motion Design",
    images: [
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&q=80",
      "https://images.unsplash.com/photo-1557682260-96773eb01377?w=800&q=80",
    ],
    link: "/project/iao",
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
              images={project.images}
              link={project.link}
              size="large"
              showTitle={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
