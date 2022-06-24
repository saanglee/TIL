import React, { useRef, useState, useEffect } from "react";

const Image = (src) => {
  const imgRef = useRef(null);
  const observerRef = useRef();
  const [isLoad, setIsLoad] = useState(false);
  // entries: IntersectionObserver Entry, io: IntersectionObserver
  const onIntersection = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsLoad(true);
      }
    });
  };
  useEffect(() => {
    if (!observerRef.current) {
      // 무슨뜻??
      observerRef.current = new IntersectionObserver(onIntersection);
    }
    imgRef.current && observerRef.current.observe(imgRef.current);
  }, []);

  return (
    <div>
      <img ref={imgRef} src="" />
    </div>
  );
};

export default Image;
