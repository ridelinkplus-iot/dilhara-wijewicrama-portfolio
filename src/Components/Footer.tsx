import React from "react";
import {
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Theme matching About.tsx: Light background, rounded top, overlapping previous section
    <footer className="relative bg-[#eaf2f3] rounded-t-[40px] mt-[-40px] px-6 py-16 z-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-between h-full">
        {/* Top Content Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-16 items-start">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter text-black">
              DILHARA
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
              A Mechanical Engineer dedicated to precision, innovation, and
              functional design. Turning complex technical challenges into
              elegant, efficient solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-lg mb-2 text-black uppercase">
              Menu
            </h3>
            {["Home", "About", "Education", "Projects", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(`#${link.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-700 hover:text-black hover:translate-x-1 transition-all text-sm font-medium w-fit"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-lg mb-2 text-black uppercase">
              Socials
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  Icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/dilhara-wijewickrama-3036772b9/?trk=opento_sprofile_details"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Matches the 'About' button style: Border black, hover fill black
                  className="w-10 h-10 flex items-center justify-center border border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-xs font-medium text-center md:text-left">
            © {new Date().getFullYear()} Dilhara Wijewickrama. All rights
            reserved.
          </p>

          {/* Back to Top Button - Styled like the LinkedIn button in About.tsx */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Back to Top
            <FaArrowUp
              className="group-hover:-translate-y-1 transition-transform duration-300"
              size={10}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
