import React from "react";
// Replace with your actual education images
import eduImage1 from "../assets/Education/hnd.jpg";
import eduImage2 from "../assets/Education/sfs.jpg";
import eduImage3 from "../assets/Education/sjv.jpg";

const educationData = [
  {
    id: 1,
    title: "Higher National Diploma in Mechanical Engineering",
    institution: "ATI - Galle",
    image: eduImage1
  },
  {
    id: 2,
    title: "Diploma in AutoCAD",
    institution: "SFS Academy- Galle",
    image: eduImage2
  },
  {
    id: 3,
    title: "Swarna Jayanthi Maha Vidyalaya", // Update with actual unique data
    institution: "Kegalle",
    image: eduImage3
  }
];

const Education: React.FC = () => {
  return (
    <section className="relative bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 uppercase tracking-wide">
          Education
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="group relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-white font-bold text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm font-medium">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
