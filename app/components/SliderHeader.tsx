"use client";

import { useEffect, useState } from "react";

export default function FooterSlider() {
  const images = ["/slika1.png", "/slika2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="
        relative w-full
        overflow-hidden  /* Ovo je u redu, ali skida samo horizontalno i vertikalno ako je sadržaj veći od kontejnera */
        h-[120px]  /* mobilni (ispod 640px) */
        sm:h-[150px]
        md:h-[180px]
        lg:h-[200px]
        bg-black
      "
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-opacity duration-700
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}
