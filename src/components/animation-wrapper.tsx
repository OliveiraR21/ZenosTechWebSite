"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  triggerOnce?: boolean;
  threshold?: number;
};

export function AnimationWrapper({
  children,
  className,
  delay = 0,
  triggerOnce = true,
  threshold = 0.1,
}: AnimationWrapperProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
