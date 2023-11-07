import { Hero } from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import "./index.scss";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Services</section>
      <section>Parallax</section>
      <section id="Portafolio">Portafolio</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
};

export default App;
