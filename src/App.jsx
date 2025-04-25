import About from "./Components/About";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
export default App;
