import { useEffect, useMemo, useRef, useState } from "react";
import "./style.scss";

export default function experienceScroll() {
  const steps = useMemo(
    () => [
      {
        image: "../src/assets/img/CureMD.png",
        company: "CureMD",
        designation: "Senior Frontend Engineer",
        date: "01/2026 - CURRENT",
        desc: "Led UI development for CureMD’s 11x and 10G products using Angular and TypeScript, delivering responsive, scalable, and accessible frontends with the CureMD Design System Library. Ensured WCAG compliance to enhance usability for diverse users while collaborating closely with backend engineers and UX/UI designers for seamless integration. Improved performance through code reviews, best practices, and modern tooling, and mentored team members by sharing frontend development expertise.",
      },
      {
        image: "../src/assets/img/CureMD.png",
        company: "CureMD",
        designation: "Frontend Engineer",
        date: "09/2024 - 01/2026",
        desc: "Led UI development for CureMD’s 11x and 10G products using Angular and TypeScript, delivering responsive, scalable, and accessible frontends with the CureMD Design System Library. Ensured WCAG compliance to enhance usability for diverse users while collaborating closely with backend engineers and UX/UI designers for seamless integration. Improved performance through code reviews, best practices, and modern tooling, and mentored team members by sharing frontend development expertise.",
      },
      {
        image: "../src/assets/img/CureMD.png",
        company: "InvoZone",
        designation: "Frontend Engineer",
        date: "09/2022 - 08/2024",
        desc: "Engineered scalable, high-performance web applications using React.js, Next.js, and TypeScript, delivering Web 3.0 products powered by decentralized technologies. Drove efficient API integration and state management with Redux, extended Shopify platforms through custom themes and embedded apps using Remix and Polaris, and enhanced team productivity through optimized Git workflows.",
      },
      {
        image: "../src/assets/img/CureMD.png",
        company: "InvoZone",
        designation: "Associate Frontend Engineer",
        date: "09/2021 - 08/2022",
        desc: "Built modern, accessible user interfaces using HTML5, CSS3, and React.js, translating UI/UX prototypes into responsive and interactive experiences. Developed reusable React components to improve scalability and performance, implemented SASS/SCSS for modular and maintainable styling, and integrated frontend applications with backend systems to streamline workflows.",
      },
      {
        image: "../src/assets/img/CureMD.png",
        company: "INSICOL",
        designation: "Associate Frontend Engineer",
        date: "09/2020 - 08/2021",
        desc: "Learned and applied HTML5 and CSS3 to develop basic web applications, gaining foundational JavaScript knowledge to implement interactive features. Built responsive layouts to enhance usability across multiple devices.",
      },
      {
        image: "../src/assets/img/CureMD.png",
        company: "ANALOG",
        designation: "Graphic Designer",
        date: "02/2019 - 08/2019",
        desc: "Led UI development for CureMD’s 11x and 10G products using Angular and TypeScript, building responsive, scalable, and accessible frontends with the CureMD Design System Library. Ensured WCAG compliance to improve usability for diverse users, while collaborating closely with backend engineers and UX/UI designers to deliver seamless integrations. Optimized application performance through rigorous code reviews, modern tooling, and frontend best practices, and mentored team members by sharing knowledge and strengthening overall frontend development standards. If you want it shorter, more impact-driven, or more conversational, tell me where you’re using it and I’ll tweak the tone.",
      },
    ],
    [],
  );

  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const formatNum = (n) => `${String(n).padStart(2, "0")}.`;

  useEffect(() => {
    const rafRef = { current: 0 };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;

        const vhMiddle = window.innerHeight / 2;
        let closest = { idx: 0, distance: Infinity };

        stepRefs.current.forEach((el, idx) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const stepMiddle = rect.top + rect.height / 2;
          const distance = Math.abs(stepMiddle - vhMiddle);
          if (distance < closest.distance) {
            closest = { idx, distance };
          }

          const start = window.innerHeight * 0.7;
          const end = window.innerHeight * 0.3;
          const total = rect.height + (start - end);
          const current = start - rect.top;
          const p = Math.min(1, Math.max(0, current / Math.max(1, total)));
          const fillEl = el.querySelector(".experience-step__fill");
          if (fillEl) fillEl.style.height = `${p * 100}%`;
        });

        setActiveIndex(closest.idx);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Initial call
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="experience-scroll" id="experience">
      <div className="experience-scroll__grid">
        <div className="experience-scroll__left">
          <div className="experience-scroll__counter">
            {formatNum(activeIndex + 1)}
          </div>
        </div>
        <div className="experience-scroll__right">
          <div className="experience-scroll__kicker">
            My <em>Professional</em> Experience
          </div>
          <div className="experience-scroll__steps">
            {steps.map((s, i) => (
              <div
                key={`${s.company}-${i}`}
                className={`experience-step ${i === activeIndex ? "is-active" : ""}`}
                ref={(el) => (stepRefs.current[i] = el)}
              >
                <div className="experience-step__rail">
                  <span className="experience-step__dot" />
                  <span className="experience-step__line" />
                  <span className="experience-step__fill" />
                </div>
                <div className="experience-step__content">
                  <div className="experience-step__header">
                    <div>
                      {/* <div className="experience-step__logo"><img src={s.image} alt={s.company} /></div> */}
                      <div className="experience-step__title">{s.company}</div>
                      <div className="experience-step__designation">
                        {s.designation}
                      </div>
                    </div>
                    <div className="experience-date">{s.date}</div>
                  </div>
                  <div className="experience-step__desc">
                    <p>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
