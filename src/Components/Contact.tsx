import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact: React.FC = () => {
  // --- STATE & LOGIC (Preserved from your Contact.jsx) ---
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: [] as string[],
    message: ""
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const maxMessage = 600;

  const subjectOptions = [
    "Job Opportunity",
    "Freelance Project",
    "Collaboration",
    "General Inquiry"
  ];

  // Validation Logic
  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const errors = {
    name: !form.name.trim() ? "Name is required" : "",
    email: !form.email.trim()
      ? "Email is required"
      : !isValidEmail(form.email)
      ? "Invalid email address"
      : "",
    subject: form.subject.length === 0 ? "Select at least one subject" : "",
    message: !form.message.trim() ? "Message is empty" : ""
  };

  const isFormValid =
    !errors.name && !errors.email && !errors.subject && !errors.message;

  const setField = (key: string, val: any) => {
    setForm((f) => ({ ...f, [key]: val }));
  };

  const toggleSubject = (option: string) => {
    setForm((f) => ({
      ...f,
      subject: f.subject.includes(option)
        ? f.subject.filter((item) => item !== option)
        : [...f.subject, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid) return;

    try {
      setSending(true);
      const to = "94752293689";
      const subjectList = form.subject.join(", ");
      const text = `*New Portfolio Contact*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${subjectList}\n\n*Message:*\n${form.message}`;

      const url = `https://wa.me/${to}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setSending(false);
    }
  };

  // --- RENDER ---
  return (
    <section id="contact" className="relative bg-[#1a1a1a] py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading (Matching Education Theme) */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6 uppercase tracking-wide">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT COLUMN: Contact Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide border-l-4 border-white pl-4">
                Contact Info
              </h3>

              <div className="space-y-6 mb-12">
                {/* Email Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:dilharawijewickrama@gmail.com"
                      className="text-white text-lg font-medium hover:underline"
                    >
                      dilharawijewickrama@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                      Phone / WhatsApp
                    </p>
                    <a
                      href="tel:+94752293689"
                      className="text-white text-lg font-medium hover:underline"
                    >
                      +94 75 229 3689
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
                Social Profiles
              </h3>
              <div className="flex flex-wrap gap-4">
                <SocialBtn
                  icon={<FaLinkedin />}
                  link="https://www.linkedin.com/in/dilhara-wijewickrama-3036772b9/?trk=opento_sprofile_details"
                />
                <SocialBtn
                  icon={<FaWhatsapp />}
                  link="https://wa.me/94752293689"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="bg-[#262626] p-8 md:p-10 rounded-xl shadow-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  className={`w-full bg-[#1a1a1a] border-b-2 ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-white/10 focus:border-white"
                  } px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600`}
                  placeholder="Enter your name"
                />
                {touched.name && errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className={`w-full bg-[#1a1a1a] border-b-2 ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-white/10 focus:border-white"
                  } px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600`}
                  placeholder="name@example.com"
                />
                {touched.email && errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Selection (Chips) */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Subject
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjectOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleSubject(opt)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-full border transition-all duration-300 ${
                        form.subject.includes(opt)
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {touched.subject && errors.subject && (
                  <span className="text-red-500 text-xs mt-2 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setField("message", e.target.value.slice(0, maxMessage))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  className={`w-full bg-[#1a1a1a] border-b-2 ${
                    touched.message && errors.message
                      ? "border-red-500"
                      : "border-white/10 focus:border-white"
                  } px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 resize-none`}
                  placeholder="Tell me about your project..."
                />
                <div className="flex justify-between mt-1">
                  {touched.message && errors.message ? (
                    <span className="text-red-500 text-xs">
                      {errors.message}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  <span className="text-xs text-gray-500">
                    {form.message.length}/{maxMessage}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || sending}
                className={`mt-4 py-4 px-8 w-full font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  !isFormValid || sending
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-200 hover:scale-[1.02]"
                }`}
              >
                {sending ? "Opening WhatsApp..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Social Buttons
const SocialBtn = ({ icon, link }: { icon: React.ReactNode; link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#262626] text-gray-400 text-xl border border-white/5 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Contact;
