import { Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cabin-charcoal text-cabin-cream">
      <div className="container-wide px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Old Man's Cabin"
              className="h-16 w-auto mx-auto md:mx-0 mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-cabin-cream/60 text-sm">
              Un refugiu în natură, departe de zgomot
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#despre" className="text-sm text-cabin-cream/70 hover:text-cabin-gold transition-colors">
                Despre
              </a>
              <a href="#experienta" className="text-sm text-cabin-cream/70 hover:text-cabin-gold transition-colors">
                Experiența
              </a>
              <a href="#galerie" className="text-sm text-cabin-cream/70 hover:text-cabin-gold transition-colors">
                Galerie
              </a>
              <a href="#facilitati" className="text-sm text-cabin-cream/70 hover:text-cabin-gold transition-colors">
                Facilități
              </a>
              <a href="#locatie" className="text-sm text-cabin-cream/70 hover:text-cabin-gold transition-colors">
                Locație
              </a>
              <a href="#contact" className="text-sm text-cabin-cream/70 hover:text-cabin-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://instagram.com/oldmanscabin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cabin-cream/20 flex items-center justify-center hover:border-cabin-gold hover:text-cabin-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/oldmanscabin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cabin-cream/20 flex items-center justify-center hover:border-cabin-gold hover:text-cabin-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@oldmanscabin.ro"
              className="w-10 h-10 rounded-full border border-cabin-cream/20 flex items-center justify-center hover:border-cabin-gold hover:text-cabin-gold transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cabin-cream/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cabin-cream/40 text-xs">
          <p>© {currentYear} Old Man's Cabin. Toate drepturile rezervate.</p>
          <p>Măguri, Cluj • România</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
