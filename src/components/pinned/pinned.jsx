import { useEffect, useLayoutEffect, useRef } from "react";
import "./style.scss";

export default function PinnedRevealFixed({ front, back, pinFactor = 1 }) {
  const wrapperRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const state = useRef({
    start: 0,
    distance: 0,
    raf: 0,
  });

  const measure = () => {
    const wrapper = wrapperRef.current;
    const frontEl = frontRef.current;
    const backEl = backRef.current;
    if (!wrapper || !frontEl || !backEl) return;

    const frontHeight = frontEl.offsetHeight || window.innerHeight;
    const backHeight = backEl.offsetHeight || window.innerHeight;

    const distance = Math.max(window.innerHeight, frontHeight * pinFactor);

    wrapper.style.setProperty(
      "--pinned-wrapper-height",
      `${distance + backHeight}px`
    );

    const rect = wrapper.getBoundingClientRect();
    state.current.start = rect.top + window.scrollY;
    state.current.distance = distance;
  };

  const update = () => {
    const frontEl = frontRef.current;
    const backEl = backRef.current;
    if (!frontEl || !backEl) return;

    const { start, distance } = state.current;
    const scrollY = window.scrollY;

    const progress = Math.min(
      1,
      Math.max(0, (scrollY - start) / Math.max(1, distance))
    );

    frontEl.style.setProperty("--front-progress", progress);

    if (progress < 1) {
      backEl.classList.add("is-fixed");
      backEl.classList.remove("is-revealed");
    } else {
      backEl.classList.remove("is-fixed");
      backEl.classList.add("is-revealed");
    }
  };

  useLayoutEffect(() => {
    measure();
    update();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (state.current.raf) return;
      state.current.raf = requestAnimationFrame(() => {
        state.current.raf = 0;
        update();
      });
    };

    const onResize = () => {
      measure();
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (state.current.raf) cancelAnimationFrame(state.current.raf);
    };
  }, []);

  return (
    <section className="pinned-reveal" ref={wrapperRef}>
      <div className="pinned-reveal__back is-fixed" ref={backRef}>
        {back}
      </div>
      <div className="pinned-reveal__frontWrap">
        <div className="pinned-reveal__front" ref={frontRef}>
          {front}
        </div>
      </div>
    </section>
  );
}
