import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 p-4 px-6 lg:px-40 fixed w-[100vw] top-0 z-50 border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          AakashLabs
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 ">
          <a
            href="/"
            className="relative group font-semibold text-md hover:text-gray-600"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-[70%]"></span>
          </a>
          <a
            href="#about"
            className="relative group font-semibold text-md hover:text-gray-600"
          >
            About
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-[70%]"></span>
          </a>
          <a
            href="#team"
            className="relative group font-semibold text-md hover:text-gray-600"
          >
            Team
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-[70%]"></span>
          </a>
          <a
            href="#contact"
            className="relative group font-semibold text-md hover:text-gray-600"
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-[70%]"></span>
          </a>
          <Link
            to="/feature"
            className="relative group font-semibold text-md hover:text-gray-600"
          >
            Feature
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-[70%]"></span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button>Explore More</Button>
          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Card className="h-full p-6 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#team"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/feature"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Feature
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
};

export default Header;
