import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Hook to automatically reveal an element with a smooth transition when scrolled into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
}) {
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (options?.delayMs) {
            setTimeout(() => {
              setIsRevealed(true);
            }, options.delayMs);
          } else {
            setIsRevealed(true);
          }
          observer.unobserve(el);
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options?.threshold, options?.rootMargin, options?.delayMs]);

  return { ref, isRevealed };
}

/**
 * Wrapper component to reveal any section or grid item smoothly on scroll.
 */
export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ delayMs });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal-init ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Component that animates number counting when scrolled into viewport.
 */
export function AnimatedCounter({
  target,
  suffix = "",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, isRevealed } = useScrollReveal<HTMLSpanElement>();

  useEffect(() => {
    if (!isRevealed) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic: 1 - (1 - x)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRevealed, target, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {isRevealed ? count : target}
      {suffix}
    </span>
  );
}
