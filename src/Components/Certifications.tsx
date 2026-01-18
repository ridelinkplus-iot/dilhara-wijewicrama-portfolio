// src/components/Certifications.tsx
import { useState } from "react";

// TODO: Replace these with your actual certificate image imports
import cert1 from "../assets/Certification/project 1 (8).jpeg";
import cert2 from "../assets/Certification/ATC_AP70251809805857_Diploma in AutoCAD_page-0001.jpg";

interface Certification {
  id: number;
  image: string;
  title: string; // What is the certificate
  issuer: string; // From what course/provider
}

const certificationsData: Certification[] = [
  {
    id: 1,
    image: cert2,
    title: "Diploma in AutoCAD",
    issuer: "SFS Academy"
  },
  {
    id: 2,
    image: cert1,
    title: "MECH EXPO 2026",
    issuer: "Higher National Diploma in Engineering, ATI, Galle"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="certifications" className="relative bg-[#eaf2f3] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-16 uppercase tracking-wide">
            CERTIFICATIONS
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="group cursor-pointer flex flex-col gap-3"
                onClick={() => openModal(cert)}
              >
                {/* Image Container with Hover Effect */}
                <div className="overflow-hidden rounded-xl shadow-md bg-white">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>

                {/* Text Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image itself
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full Size Image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-auto h-auto max-h-[85vh] max-w-full rounded-lg shadow-2xl"
            />

            {/* Optional: Caption in Modal */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{selectedCert.title}</h3>
              <p className="text-gray-300">{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
