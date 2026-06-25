import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./style.scss";
import { Collapse } from "antd";

export default function Education() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const state = useRef({
    start: 0,
    distance: 0,
    raf: 0,
    maxScale: 1.18,
  });

  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const measure = () => {
    const section = sectionRef.current;
    const block = blockRef.current;
    if (!section || !block) return;

    if (isMobile()) {
      section.style.height = "auto";
      block.style.transform = "none";
      state.current.maxScale = 1;
      state.current.start = 0;
      state.current.distance = 0;
      return;
    }

    const scrollDistance = window.innerHeight * 1.5;
    section.style.height = `${window.innerHeight + scrollDistance}px`;

    block.style.transform = "translate3d(0, 0, 0) scale(1)";

    const blockRect = block.getBoundingClientRect();
    const safePadding = 24;

    const maxScaleByWidth =
      (window.innerWidth - safePadding * 2) / blockRect.width;
    const maxScaleByHeight =
      (window.innerHeight - safePadding * 2) / blockRect.height;

    state.current.maxScale = Math.max(
      1,
      Math.min(maxScaleByWidth, maxScaleByHeight, 1.18)
    );

    const sectionRect = section.getBoundingClientRect();
    state.current.start = sectionRect.top + window.scrollY;
    state.current.distance = scrollDistance;
  };

  const onScroll = () => {
    if (isMobile()) return;

    const block = blockRef.current;
    if (!block) return;

    const { start, distance, maxScale } = state.current;
    const y = window.scrollY;
    const progress = Math.min(1, Math.max(0, (y - start) / distance));

    const scale = 1 + progress * (maxScale - 1);
    const translateY = progress * -18;

    block.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
  };

  useLayoutEffect(() => {
    measure();
    onScroll();
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (isMobile()) return;
      if (state.current.raf) return;

      state.current.raf = requestAnimationFrame(() => {
        state.current.raf = 0;
        onScroll();
      });
    };

    const resizeHandler = () => {
      measure();
      onScroll();
    };

    if (!isMobile()) {
      window.addEventListener("scroll", scrollHandler, { passive: true });
    }
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(state.current.raf);
    };
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <div className="collapse-label">
          <span className="icon">🎓</span>
          <span>BSCS | University Of Central Punjab, Lahore</span>
        </div>
      ),
      children: <p>2017 - 2021</p>,
    },
    {
      key: "2",
      label: (
        <div className="collapse-label">
          <span className="icon">📚</span>
          <span>
            FSC - Pre Engineering | Punjab Group Of Colleges, Faisalabad
          </span>
        </div>
      ),
      children: <p>2015 - 2017</p>,
    },
    {
      key: "3",
      label: (
        <div className="collapse-label">
          <span className="icon">🏫</span>
          <span>Matric | The Scholars Model High School, Faisalabad</span>
        </div>
      ),
      children: <p>2013 - 2015</p>,
    },
  ];

  return (
    <div
      className={`awards ${isVisible ? "education-visible" : ""}`}
      id="education"
      ref={sectionRef}
    >
      <div className="awards-sticky">
        <div className="awards-block" ref={blockRef}>
          <div className="education-content">
            <div className="sub-title education-animate education-delay-1">
              Education & Academic Background
            </div>

            <div className="title-wrapper education-animate education-delay-2">
              <div className="title">
                My educational journey and{" "}
                <span className="italic">academic foundation</span>
              </div>
            </div>

            <div className="para education-animate education-delay-3">
              A summary of my academic background, from school to university,
              that shaped my learning and professional growth.
            </div>

            <div className="awards-collapse-wrapper">
              {items.map((item, index) => (
                <div
                  key={item.key}
                  className={`education-animate education-item-delay-${index + 1}`}
                >
                  <Collapse
                    items={[item]}
                    expandIconPosition="end"
                    expandIcon={({ isActive }) => (
                      <span className={`arrow ${isActive ? "rotate" : ""}`}>
                        ⌄
                      </span>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}