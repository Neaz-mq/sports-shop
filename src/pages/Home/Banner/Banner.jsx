// Banner.jsx

import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Banner = () => {
  const images = [
    'https://i.ibb.co/4FqhqKh/pexels-sandeep-singh-13509632.jpg',
    'https://i.ibb.co/S7DyThh/pexels-alexander-nadrilyanski-3684122.jpg',
    'https://i.ibb.co/7Cm1fmV/pexels-raj-tatavarthy-171568.jpg',
    'https://i.ibb.co/MDqXMPb/pexels-pavel-danilyuk-6203582.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval according to your preference (in milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden h-[47rem]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform transform ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
