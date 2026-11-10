import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col selection:bg-[#ff5e00] selection:text-black">
      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full min-w-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
