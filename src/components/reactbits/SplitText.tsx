import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: any;
  animationTo?: any;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0px,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: any) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: { easing: (t: number) => t }, // Simplified easing for now
    }))
  );

  return (
    <p
      ref={ref}
      className={`inline-block m-0 leading-tight ${className}`}
      style={{ textAlign }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <animated.span
                key={index}
                style={springs[index] as any}
                className="inline-block will-change-[transform,opacity]"
              >
                {letter}
              </animated.span>
            );
          })}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </p>
  );
}
