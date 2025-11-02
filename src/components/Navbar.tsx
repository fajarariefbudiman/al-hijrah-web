import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/al-hijrah-logo-rm.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/search", label: "Perjalanan" },
    { path: "/bus", label: "Armada" },
    { path: "/routes", label: "Rute" },
    { path: "/about", label: "Tentang" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-amber-200 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <img
              src={logo}
              alt="Al Hijrah Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${isActive(link.path) ? "text-amber-600 border-b-2 border-amber-600 pb-1" : "text-gray-700 hover:text-amber-600"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-md border border-amber-300">Daftar</Button>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Overlay (blur + light tint) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Side Drawer Menu */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <img
            src={logo}
            alt="Al Hijrah Logo"
            className="h-10 w-auto"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-amber-600 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium uppercase tracking-wide transition-colors ${isActive(link.path) ? "text-amber-600 border-l-4 border-amber-600 pl-3" : "text-gray-700 hover:text-amber-600 pl-3"}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                variant="ghost"
                className="w-full text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                Masuk
              </Button>
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold border border-amber-300">Daftar</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
