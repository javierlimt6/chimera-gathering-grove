import React from "react";
import { Github, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/blazeup_slides/0861518d-ad0f-4cab-936a-f2e5d4e9df78.png"
                alt="BlazeUp"
                className="h-8 w-auto"
              />
              <span className="font-poppins font-semibold text-lg text-blaze-dark">
                BlazeUp
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Supercharging the way you tackle your mornings.
            </p>
            <div className="flex gap-4">
              {/* <a 
                href="#" 
                className="text-muted-foreground hover:text-blaze-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-blaze-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-blaze-orange transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/blazeupapp"
                className="text-muted-foreground hover:text-blaze-orange transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* <div>
            <h3 className="font-semibold text-lg mb-4">
              <p>Links (they don't really work yet...)</p>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-blaze-orange transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-blaze-orange transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-blaze-orange transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-blaze-orange transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>javier.lim@u.nus.edu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-6 text-center text-muted-foreground text-sm">
          <p>©{new Date().getFullYear()} BlazeUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
