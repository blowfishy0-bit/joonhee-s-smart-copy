import Header from "@/components/Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12 opacity-0 animate-fade-in">
            About
          </h1>
          
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Joonhee Park is a Los Angeles-based graphic designer with a focus on 
              brand identity, type design, and motion graphics. Their work explores 
              the intersection of digital and physical experiences.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              With experience at studios like HUSH and projects for clients including 
              Dongdaemun Design Plaza and AIGA LA, Joonhee brings a thoughtful approach 
              to every project.
            </p>
            
            <div className="pt-8 border-t border-border">
              <h2 className="text-sm font-medium text-muted-foreground mb-4">Contact</h2>
              <div className="space-y-2">
                <a 
                  href="mailto:hello@joonheepark.info" 
                  className="nav-link inline-block text-lg"
                >
                  hello@joonheepark.info
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <h2 className="text-sm font-medium text-muted-foreground mb-4">Social</h2>
              <div className="flex gap-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-lg"
                >
                  Instagram ↗
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-lg"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link 
              to="/" 
              className="nav-link inline-flex items-center gap-2 text-lg"
            >
              ← Back to work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
