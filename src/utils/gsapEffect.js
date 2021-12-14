import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const gsapEffect = (element) => {
  const animate = gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  );
  ScrollTrigger.create({
    trigger: element,
    animation: animate,
    toggleActions: "play none none none",
    once: true,
  });
};

export const gsapTopEffect = (element) => {
  const animate = gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration: 1 }
  );
  ScrollTrigger.create({
    trigger: element,
    animation: animate,
    toggleActions: "play none none none",
    once: true,
  });
};
