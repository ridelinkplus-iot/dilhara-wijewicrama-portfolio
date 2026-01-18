import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-black text-white px-4 sm:px-8 py-5 flex items-center justify-between fixed top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wider relative">
        <span className="relative z-10">WKD</span>
        <span className="absolute inset-0 blur-sm bg-white opacity-20"></span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-sm font-medium">
        <li className="cursor-pointer relative group">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="transition-all duration-300 hover:text-gray-300"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="cursor-pointer relative group">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
            className="transition-all duration-300 hover:text-gray-300"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="cursor-pointer relative group">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#projects");
            }}
            className="transition-all duration-300 hover:text-gray-300"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="cursor-pointer relative group">
          <a
            href="#certifications"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#certifications");
            }}
            className="transition-all duration-300 hover:text-gray-300"
          >
            Certifications
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="cursor-pointer relative group">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="transition-all duration-300 hover:text-gray-300"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Desktop Resume Button */}
      <button
        onClick={() => {
          window.open("/src/assets/Dilhara%20Wijewickrama.pdf", "_blank");
        }}
        className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Resume
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-center relative z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0 translate-x-3" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-black border-t border-gray-800 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-6 px-4">
          <li className="py-4 hover:bg-gray-900 cursor-pointer transition-all duration-200 rounded-lg px-4 border-b border-gray-800">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="block font-medium text-base"
            >
              Home
            </a>
          </li>
          <li className="py-4 hover:bg-gray-900 cursor-pointer transition-all duration-200 rounded-lg px-4 border-b border-gray-800">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
              className="block font-medium text-base"
            >
              About
            </a>
          </li>
          <li className="py-4 hover:bg-gray-900 cursor-pointer transition-all duration-200 rounded-lg px-4 border-b border-gray-800">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#projects");
              }}
              className="block font-medium text-base"
            >
              Projects
            </a>
          </li>
          <li className="py-4 hover:bg-gray-900 cursor-pointer transition-all duration-200 rounded-lg px-4 border-b border-gray-800">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="block font-medium text-base"
            >
              Contact
            </a>
          </li>
          <li className="pt-6 px-4">
            <button
              onClick={() => {
                window.open("/src/assets/Dilhara%20Wijewickrama.pdf", "_blank");
              }}
              className="w-full bg-white text-black py-3 rounded-full text-sm font-bold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
