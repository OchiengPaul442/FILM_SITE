import React, { useState } from 'react';
import RightArrow from '@public/icons/RightArrow';
import LeftArrow from '@public/icons/LeftArrow';

interface CarouselProps {
  title: string;
  subText?: string;
  data: {
    name: string;
    title: string;
    subText: string;
    class: string;
    image: string;
  }[];
  sectionColor?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  title,
  subText,
  data,
  sectionColor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      className="overflow-hidden relative w-full h-screen"
      style={{
        background: sectionColor,
      }}
    >
      <div className="space-y-6">
        <div className="container flex flex-col justify-center items-start">
          <div>
            <h1
              className="leading-[5rem] font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <h2 dangerouslySetInnerHTML={{ __html: subText || '' }}></h2>
          </div>
        </div>
        <div className="relative">
          {/* carousel */}
          <div
            className="absolute flex gap-12 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 816}px)`,
              left: `calc((100% - 1200px) / 2)`,
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-black shadow-md overflow-hidden flex flex-col justify-between p-10 w-[816px] h-[493px]"
              >
                <div className="w-full h-full flex items-center">
                  <p className="mt-2 text-gray-500">{item.subText}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-[80px] h-[80px] rounded-full object-cover"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div>
                    <h6 className="font-semibold">{item.name}</h6>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-sm">{item.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          padding: 0,
        }}
      >
        <div className="flex items-center space-x-8 container">
          {/* carousel controls */}
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="bg-black rounded-sm p-2 flex items-center justify-center"
            >
              <LeftArrow width="25px" height="25px" fill="#fff" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black rounded-sm p-2 flex items-center justify-center"
            >
              <RightArrow width="25px" height="25px" fill="#fff" />
            </button>
          </div>
          {/* carousel progress bar */}
          <div className="w-full h-2 bg-white">
            <div
              className="h-full bg-black"
              style={{
                width: `${((currentIndex + 1) / data.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
