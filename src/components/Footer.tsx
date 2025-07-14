import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AakashLabs All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/AakashLabs" rel="">
            <Facebook className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com/aakash.labs/" target="" rel="">
            <Instagram className="w-5 h-5 hover:text-pink-400" />
          </a>
          <a href="https://np.linkedin.com/company/aakashlabs" target="" rel="">
            <Linkedin className="w-5 h-5 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
