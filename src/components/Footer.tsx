import { Heart, Github, Twitter, Facebook, Linkedin, Send, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-primary/20 py-6 mt-auto animate-fade-in relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-wave" />
      <div className="absolute inset-x-0 top-0.5 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-wave" style={{ animationDelay: "0.5s" }} />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white/80">Made with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse-slow" />
            <span className="text-white/80"> By Ezra Daniel, in Tanzania </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/raydanielg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-all transform hover:scale-110"
            >
              <Github className="w-5 h-5 animate-float" />
              <span>GitHub</span>
            </a>
            <a
              href="https://x.com/raydanielg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-all transform hover:scale-110"
            >
              <Twitter className="w-5 h-5 animate-float" style={{ animationDelay: "0.2s" }} />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/raydaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-all transform hover:scale-110"
            >
              <Facebook className="w-5 h-5 animate-float" style={{ animationDelay: "0.4s" }} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ezra-daniel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-all transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 animate-float" style={{ animationDelay: "0.6s" }} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://t.me/raydaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-all transform hover:scale-110"
            >
              <Send className="w-5 h-5 animate-float" style={{ animationDelay: "0.8s" }} />
              <span>Telegram</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-sm text-white/60">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+255762814092" className="hover:text-primary">+255 762 814 092</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-wave" />
      <div className="absolute inset-x-0 bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-wave" style={{ animationDelay: "0.5s" }} />
    </footer>
  );
};