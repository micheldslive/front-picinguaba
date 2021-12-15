import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const gsapFadeMove = (element) => {
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

export const gsapFadeTop = (element) => {
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

export const gsapMoveLeft = (element) => {
  const animate = gsap.to(element, {
    xPercent: -50,
    ease: "none",
  });
  ScrollTrigger.create({
    trigger: element,
    animation: animate,
    start: "top top-=200",
    end: "top top+=300",
    scrub: 1
  });
};

export const gsapMoveRight = (element) => {
  const animate = gsap.to(element, {
    xPercent: -100,
    ease: "none",
  });
  ScrollTrigger.create({
    trigger: element,
    animation: animate,
    start: "top top+=100",
    end: "top top-=100",
    scrub: 1
  });
};
