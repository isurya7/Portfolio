import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Story from "./components/Story"; // Changed from EducationJourney
import Contact from "./components/Contact";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <GitHubStats />
      <Services />
      <Gallery />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;