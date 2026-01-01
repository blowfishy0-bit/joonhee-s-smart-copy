import Header from "@/components/Header";
import { Link } from "react-router-dom";

const experiments = [
  {
    id: 1,
    title: "Generative Typography",
    description: "Exploring algorithmic approaches to letterform creation",
    year: "2024",
  },
  {
    id: 2,
    title: "Motion Studies",
    description: "Investigations in kinetic typography and animation",
    year: "2024",
  },
  {
    id: 3,
    title: "Color Systems",
    description: "Systematic exploration of color relationships in digital spaces",
    year: "2023",
  },
  {
    id: 4,
    title: "3D Compositions",
    description: "Abstract dimensional studies using computational tools",
    year: "2023",
  },
];

const Experiments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16 opacity-0 animate-fade-in">
          Experiments
        </h1>
        
        <div className="space-y-0 border-t border-border">
          {experiments.map((experiment, index) => (
            <div
              key={experiment.id}
              className="py-8 border-b border-border opacity-0 animate-fade-in group cursor-pointer hover:bg-secondary/50 transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-medium mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {experiment.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {experiment.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {experiment.year}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <Link 
            to="/" 
            className="nav-link inline-flex items-center gap-2 text-lg"
          >
            ← Back to work
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Experiments;
