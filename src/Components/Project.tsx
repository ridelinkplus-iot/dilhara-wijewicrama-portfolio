import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// --- ASSETS ---
// Update these paths to your actual project images
import videoSrc from "./../../public/videos/CG300.mp4";
import projectMain from "../assets/Project 1/project 1 (10).jpeg";
import projectThumb1 from "../assets/Project 1/project 1 (8).jpeg";
import projectThumb2 from "../assets/Project 1/project 1 (4).jpeg";
import projectThumb3 from "../assets/Project 1/project 1 (9).jpeg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Intersection Observer for Video Play/Pause
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false // Changed to false so it pauses when you scroll past it
  });

  // Handle Video Playback
  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
    }
    else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [inView]);

  // GSAP Scroll Animation
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    });

    clipAnimation.set(".mask-clip-path", {
      width: "60vw",
      height: "50vh",
      borderRadius: 20,
      willChange: "width, height, border-radius"
    });

    clipAnimation.set(".overlay-text", {
      scale: 0.8,
      opacity: 0.5,
      willChange: "transform, opacity"
    });

    clipAnimation.to(
      ".mask-clip-path",
      {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "power1.inOut"
      },
      0
    );

    clipAnimation.to(
      ".overlay-text",
      {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut"
      },
      0
    );

    if (clipAnimation.scrollTrigger) {
      scrollTriggerRef.current = clipAnimation.scrollTrigger;
    }
    else {
      scrollTriggerRef.current = null;
    }

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      clipAnimation.kill();
    };
  }, []);

  return (
    <section id="projects" className="bg-[#1a1a1a] w-full overflow-hidden">
      {/* --- SECTION 1: VIDEO SCROLL EFFECT --- */}
      <div
        id="video-screen"
        className="min-h-screen w-screen relative bg-[#1a1a1a] mb-20"
        ref={inViewRef}
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white pt-16 pb-10 uppercase tracking-wide">
            PROJECTS
          </h2>

          <div
            className="h-[50vh] md:h-[100vh] w-screen flex items-center justify-center"
            id="clip"
          >
            <div
              className="mask-clip-path relative overflow-hidden flex items-center justify-center rounded-[20px]"
              style={{ width: "60vw", height: "50vh" }}
              ref={videoContainerRef}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                loop
                muted
                playsInline
                preload="auto"
                className="absolute left-0 top-0 w-full h-full object-cover"
              />

              {/* Optional Overlay Text inside video if needed */}
              <div
                className="overlay-text relative z-10 text-center px-8 max-w-xl flex flex-col items-center justify-center text-white"
                ref={textRef}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: PROJECT 01 DETAILS CARD --- */}
      <div className="relative z-20 pb-24 px-4 flex justify-center">
        <div className="max-w-5xl w-full bg-[#eaf2f3] rounded-[40px] p-8 md:p-12 shadow-2xl">
          {/* Top Row: Main Image & Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            {/* Left: Main Image */}
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <img
                src={projectMain}
                alt="Project Main"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-black mb-2 uppercase tracking-tight">
                Project CINNA GLIDE - 300
              </h3>
              <h3 className="text-[14px] font-bold text-black mb-2  tracking-tight">
                Higher National Diploma in Mechanical Engineering
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                For my HNDE culmination project at ATI Galle, I co-developed the
                "CINNA GLIDE - 300," a semi-automated machine designed to
                revolutionize the traditional cinnamon industry. To address the
                bottleneck of manual scraping and rubbing, we engineered a
                robust electromechanical system controlled by an Arduino Mega.
                The machine utilizes pneumatic cylinders and stepper motors to
                perform precision scraping and polishing, ensuring high-quality
                consistency. Modeled in SolidWorks, this prototype demonstrates
                a scalable solution to increase efficiency and reduce the
                reliance on skilled manual labor.
              </p>

              {/* Button */}
              <div className="flex flex-col md:flex-row gap-2">
                <div>
                  <button
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/posts/dilhara-wijewickrama-3036772b9_engineeringinaction-cinnamonindustry-innovation-activity-7418172075892195328-nsJd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExzf_MBpX2L6zlIaUAeJ35WkDilr3hY1zA",
                        "_blank"
                      );
                    }}
                    className="px-8 py-2.5 rounded-full border-2 border-black font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 text-sm"
                  >
                    Marketing Video
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/posts/dilhara-wijewickrama-3036772b9_solidworks-cad-machinedesign-activity-7417905979893174272-oa6y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExzf_MBpX2L6zlIaUAeJ35WkDilr3hY1zA",
                        "_blank"
                      );
                    }}
                    className="px-8 py-2.5 rounded-full border-2 border-black font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 text-sm"
                  >
                    Design
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Thumbnails */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl overflow-hidden h-32 md:h-48 shadow-sm">
              <img
                src={projectThumb1}
                alt="Thumb 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-32 md:h-48 shadow-sm">
              <img
                src={projectThumb2}
                alt="Thumb 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-32 md:h-48 shadow-sm">
              <img
                src={projectThumb3}
                alt="Thumb 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
