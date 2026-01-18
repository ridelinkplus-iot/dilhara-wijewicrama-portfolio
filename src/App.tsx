import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Certifications from "./Components/Certifications";
function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <main>
        <Home />

        <About />
        <Education />
        <WorkExperience />
        <Project />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
