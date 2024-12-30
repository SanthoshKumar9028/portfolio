import { useEffect, useRef, useState } from "react";

const useInViewport = <T extends Element>(options?: {
  once?: boolean;
  threshold?: number;
}) => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingElm = entries.find((entry) => entry.isIntersecting);

        if (options?.once) {
          if (!isInView && intersectingElm) {
            setIsInView(true);
          }

          if (intersectingElm?.target) {
            observer.unobserve(intersectingElm.target);
          }
        } else {
          setIsInView(!!intersectingElm);
        }
      },
      {
        threshold: options?.threshold ?? 0.3,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref?.current]);

  return [ref, isInView] as const;
};

export default useInViewport;
