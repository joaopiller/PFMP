"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ANIMATION_MS = 700;

// Revela suavemente os elementos marcados com `data-reveal` quando entram
// na tela. Um atraso opcional pode ser passado via CSS var `--reveal-delay`.
// Elementos já visíveis no carregamento não são animados, evitando "piscar".
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = (element) => {
      element.classList.add("reveal-in");
      element.classList.remove("reveal-pending");

      const delay =
        parseInt(
          getComputedStyle(element).getPropertyValue("--reveal-delay")
        ) || 0;
      setTimeout(
        () => element.classList.remove("reveal-in"),
        ANIMATION_MS + delay
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add("reveal-pending");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
