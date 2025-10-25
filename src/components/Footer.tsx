import { Link } from "react-router-dom";
import { Hotel, Mail, Ph./ui/buttonInstagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hotel className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Luxe Stay</span>
            </div>
            <p className="text-white/70 text-sm">Premium hotel management system providing seamless booking experience for guests worldwide.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-white/70 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/rooms"
                className="block text-white/70 hover:text-primary transition-colors text-sm"
              >
                Rooms
              </Link>
              <Link
                to="/about"
                className="block text-white/70 hover:text-primary transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-white/70 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Luxury Avenue, Hotel District, HD 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@luxestay.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2024 Luxe Stay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
