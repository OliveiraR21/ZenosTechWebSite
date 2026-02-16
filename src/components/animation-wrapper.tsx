"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  hiddenClass?: string;
  animationClass?: string;
  delay?: number; // in ms
  triggerOnce?: boolean;
  threshold?: number;
};

export function AnimationWrapper({
  children,
  className,
  hiddenClass = 'opacity-0',
  animationClass = 'animate-fade-in-up',
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
      className={cn(className, isInView ? animationClass : hiddenClass)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
