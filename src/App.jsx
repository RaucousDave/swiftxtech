import About from "./Components/About";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import { useRef } from "react";
function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ heroRef, aboutRef, servicesRef, testimonialsRef }}
        />
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
export default App;
