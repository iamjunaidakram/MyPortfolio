import { useEffect, useRef } from "react";
import "./style.scss";
import IntroImg1 from "../../assets/img/intro/intro1.png";
import IntroImg2 from "../../assets/img/intro/intro2.png";
import IntroImg3 from "../../assets/img/intro/intro3.png";
import IntroImg4 from "../../assets/img/intro/intro4.png";
import IntroImg5 from "../../assets/img/intro/intro5.png";
import IntroImg6 from "../../assets/img/intro/intro6.png";
import IntroImg7 from "../../assets/img/intro/intro7.png";
import IntroImg8 from "../../assets/img/intro/intro8.png";
import IntroImg9 from "../../assets/img/intro/intro9.png";
import IntroImg10 from "../../assets/img/intro/intro10.png";
import IntroImg11 from "../../assets/img/intro/intro11.png";
import IntroImg12 from "../../assets/img/intro/intro12.png";
import Resume from "../../assets/doc/Resume.pdf";
import CheckCircleGreen from "../../assets/icon/check-circle-green.svg";

export default function Intro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = Array.from(section.querySelectorAll("[data-drift-row]"));
    let rafId = 0;

    const update = () => {
      rafId = 0;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = rect.height + vh;
      const passed = vh - rect.top;
      const progress = Math.min(1, Math.max(0, passed / total));

      rows.forEach((row) => {
        const dir = Number(row.dataset.dir || 1);
        const amount = Number(row.dataset.amount || 80);
        const x = (progress - 0.5) * 2 * amount * dir;

        row.style.setProperty("--x", `${x}px`);
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const features = [
    "Built scalable apps with Angular, React & Shopify",
    "Optimized performance",
    "Component-driven development (Reusable UI systems)",
    "API integration & state management",
    "Clean, maintainable code (TypeScript, ESLint, Prettier)",
  ];

  return (
    <div className="intro" ref={sectionRef} id="about">
      <div className="wrapper">
        <div className="content">
          <div className="title">
            <span className="italic">Frontend</span> Engineer
          </div>
          <div className="description">
            I specialize in turning designs into high-performance, responsive
            web applications using modern technologies like Shopify, React, and Angular.
            I focus on clean code, performance, and user experience.
          </div>
          <ul>
            {features.map((item) => (
              <li key={item}>
                <img src={CheckCircleGreen} alt="check" />
                {item}
              </li>
            ))}
          </ul>
          <div className="description">
            Developed multiple real-world projects with a focus on
            performance, usability, and maintainability.
          </div>
          <div className="button">
            <a
            href={Resume}
            download="My_Resume.pdf"
            className="btn"
          >
            Download Resume
          </a>
          </div>
        </div>
        <div className="scroll-drift__visual">
          <div className="scroll-drift__wrap">
            <div className="scroll-drift__row-clip">
              <div
                className="scroll-drift__row"
                data-drift-row
                data-dir="-1"
                data-amount="70"
              >
                <img src={IntroImg1} alt="Project showcase" />
                <img src={IntroImg7} alt="Project showcase" />
                <img src={IntroImg4} alt="Project showcase" />
                <img src={IntroImg3} alt="Project showcase" />
              </div>
            </div>

            <div className="scroll-drift__row-clip">
              <div
                className="scroll-drift__row"
                data-drift-row
                data-dir="1"
                data-amount="90"
              >
                <img src={IntroImg5} alt="Project showcase" />
                <img src={IntroImg6} alt="Project showcase" />
                <img src={IntroImg2} alt="Project showcase" />
                <img src={IntroImg8} alt="Project showcase" />
              </div>
            </div>

            <div className="scroll-drift__row-clip">
              <div
                className="scroll-drift__row"
                data-drift-row
                data-dir="-1"
                data-amount="60"
              >
                <img src={IntroImg9} alt="Project showcase" />
                <img src={IntroImg10} alt="Project showcase" />
                <img src={IntroImg11} alt="Project showcase" />
                <img src={IntroImg12} alt="Project showcase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
