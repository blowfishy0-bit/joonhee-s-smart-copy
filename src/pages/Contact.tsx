import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12 opacity-0 animate-fade-in">
            Contact
          </h1>
          
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Interested in working together? Let's connect and discuss your next project.
            </p>
            
            <div className="pt-8 border-t border-border">
              <h2 className="text-sm font-medium text-muted-foreground mb-4">Email</h2>
              <div className="space-y-2">
                <a 
                  href="mailto:hello@sophiebrenner.com" 
                  className="nav-link inline-block text-lg"
                >
                  hello@sophiebrenner.com
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
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-lg"
                >
                  Twitter ↗
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h2 className="text-sm font-medium text-muted-foreground mb-4">Location</h2>
              <p className="text-lg">
                Los Angeles, CA
              </p>
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

export default Contact;
