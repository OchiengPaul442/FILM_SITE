import React from 'react';
import NavBar from '../navBar/NavBar';

interface HeadSectionProps {
  image: string;
  content?: React.ReactNode;
  scrollText?: boolean;
}

const HeadSection = ({
  image,
  content,
  scrollText = true,
}: HeadSectionProps) => {
  return (
    <div className="w-full h-auto md:h-screen relative">
      <div className="absolute top-0 left-0 w-full">
        <NavBar />
      </div>
      <img
        src={image}
        className="w-full h-full object-cover object-top z-10"
        loading="eager"
      />
      {scrollText && (
        <div className="absolute left-0 top-3/4 transform -translate-y-3/4 ml-5 text-white text-2xl flex flex-col items-center space-y-4">
          <p className="transform -rotate-90">Scroll</p>
          <p className="text-sm">↓</p>
        </div>
      )}
      {content && <div>{content}</div>}
    </div>
  );
};

export default HeadSection;
