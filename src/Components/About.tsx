// src/components/About.tsx
import aboutImage from "../assets/Gemini_Generated_Image_nd7ba3nd7ba3nd7b.png";

const About = () => {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/dilhara-wijewickrama-3036772b9/?trk=opento_sprofile_details",
      "_blank"
    );
  };

  return (
    <section
      id="about"
      className="h-screen relative bg-[#eaf2f3] rounded-t-[40px] mt-[-40px] px-6 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4">ABOUT</h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-sm">
            A committed, passionate, and talented seeker with technical
            expertise and the capacity to lead and collaborate with others in a
            team. Equipped with communication skills, leadership and team work
          </p>

          <button
            className="border border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About"
            className="max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
