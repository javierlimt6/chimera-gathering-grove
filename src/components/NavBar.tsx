import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/blazeup_slides/0861518d-ad0f-4cab-936a-f2e5d4e9df78.png"
            alt="BlazeUp"
            className="h-9 w-auto"
          />
          <span className="font-poppins font-semibold text-xl text-blaze-dark">
            BlazeUp
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="font-medium text-muted-foreground hover:text-blaze-orange transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="font-medium text-muted-foreground hover:text-blaze-orange transition-colors"
          >
            About
          </a>
          <Button
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="bg-accent text-blaze-orange hover:bg-accent/80 font-medium"
          >
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-blaze-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            <a
              href="#features"
              className="font-medium text-blaze-dark p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="font-medium text-blaze-dark p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button
              className="w-full bg-blaze-orange text-white hover:bg-blaze-orange/90 font-medium mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
