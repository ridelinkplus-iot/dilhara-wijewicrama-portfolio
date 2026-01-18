import React from "react";
import bgImage from "../assets/bg.jpg";
import personImage from "../assets/main-man.png";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden pt-20 mt-15"
    >
      {/* LAYER 1 — Background Image with animated overlay */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* LAYER 2 — Text with enhanced effects */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center z-20 px-2 pt-2 md:pt-2">
        <p className="italic text-white text-lg  tracking-widest animate-fade-in opacity-0 animation-delay-300">
          Assistant
        </p>

        <h1 className="text-[3.5rem] md:text-[6rem] font-extrabold text-white leading-none tracking-tight animate-slide-up opacity-0 animation-delay-500">
          <span className="inline-block hover:scale-105 transition-transform duration-300 ">
            MECHANICAL
          </span>
          <br />
          <span className="inline-block hover:scale-105 transition-transform duration-300 ">
            ENGINEER
          </span>
        </h1>
      </div>

      {/* LAYER 3 — Human Image with hover glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 group
                sm:bottom-10 xs:bottom-16"
      >
        {" "}
        {/* Adjust for mobile screens */}
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        <img
          src={personImage}
          alt="Person"
          className="w-auto h-auto max-w-[240vw] max-h-[90vh] md:max-h-[85vh] object-contain 
               transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-2xl"
        />
      </div>

      {/* LAYER 4 — Join Button with creative black design */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-40 animate-fade-in opacity-0 animation-delay-1000">
        <button
          onClick={() => {
            document.querySelector("#contact")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="group relative px-8 py-4 bg-black text-white rounded-full text-sm font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl border-2 border-white hover:border-white"
        >
          {/* Animated background gradient */}
          <span className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] group-hover:animate-gradient-x"></span>

          {/* Button text */}
          <span className="relative z-10 flex items-center gap-2">
            Join with me
          </span>

          {/* Shimmer effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Home;
