import Banner from "./components/banner/banner"
import Intro from "./components/intro/intro"
import Projects from "./components/projects/projects"
import Awards from "./components/education/education"
import Skills from "./components/skills/skills"
import Experience from "./components/experience/experience"
import Testimonial from "./components/testimonial/testimonial"
import Pinned from "./components/pinned/pinned";
import LinkedInPage from "./components/linkedin/linkedin";
import FeaturedProjects from "./components/featuredProjects/featuredProjects";
import Footer from "./components/footer/footer";

import { useEffect, useState } from "react";
import './App.scss'

function App() {
    const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = window.innerHeight;

      const newOpacity =
        1 - Math.min(Math.max(scrollY - fadeStart, 0) / fadeEnd, 1);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Banner opacity={opacity} />
      <Intro />
      <Skills />
      <Awards />
      <FeaturedProjects />
      <Experience />
      <Pinned
        pinFactor={1.0}
        front={<Testimonial />}
        back={<LinkedInPage />}
      />
      <Footer />
    </>
  )
}

export default App
