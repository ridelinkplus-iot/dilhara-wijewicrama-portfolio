import React from "react";
import workImage from "../assets/BIA.jpg";

const WorkExperience: React.FC = () => {
  return (
    <section className="relative bg-[#eaf2f3] px-6 py-20">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-16 uppercase tracking-wide">
        Work Experience
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-start relative">
          {/* Optional decorative border or shadow can be added here */}
          <img
            src={workImage}
            alt="Work Experience"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-xl object-cover h-[500px]"
          />
        </div>

        {/* Right Column: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-1 uppercase">
            Airport and Aviation Services (Pvt).Ltd
          </h2>
          <h3 className="text-4xl md:text-2xl font-extrabold text-black mb-6 uppercase">
            Bandaranaike International Airport Katunayake
          </h3>

          <div className="text-gray-700 leading-relaxed mb-8 text-base">
            Trainee Assistant Mechanical Engineer 05 Months Working Experience
            (In following Sections)
            <br />
            <br />
            1. Central Air Conditioning System and Building Management System.
            <br />
            2. Baggage Conveyor System and Roller Shutter Doors.
            <br />
            3. Elevators, Escalators
            <br />
            4. Generators,Power House and Fabrication Workshop.
            <br />
            5. Water Treatment and Sewage Treatment System, Incinerator and Fire
            Water System.
            <br />
            6. Internal and External Plumbing System.
          </div>

          <a
            href="https://www.airport.lk/"
            className="inline-block px-8 py-3 rounded-full border-2 border-black font-bold text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-wide text-sm"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
