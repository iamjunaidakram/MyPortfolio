import "./style.scss";
import { useEffect, useRef } from "react";

export default function LinkedInPage() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !wrapper) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = windowHeight / 1.2;

      let progress = distanceFromCenter / maxDistance;
      progress = Math.min(Math.max(progress, 0), 1);

      wrapper.style.setProperty("--scroll-progress", progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="linkedin" ref={sectionRef}>
      <div className="wrapper" ref={wrapperRef}>
        <div className="linkedin-content">
          <div className="linkedin-label">Professional Network</div>

          <div className="title">
            Connect on <span className="italic">LinkedIn</span>
          </div>

          <div className="detail">
            Follow my professional journey, explore my experience, and stay
            updated with my latest work and insights.
          </div>

          <a
            href="https://www.linkedin.com/in/junaid-akram-4a0a19202/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </section>
  );
}