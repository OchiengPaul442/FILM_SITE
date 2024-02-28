import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);

interface GridSectionProps {
  title: string;
  description: string;
  images: string[];
}

const GridSection: React.FC<GridSectionProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className="w-full h-full relative container flex flex-col items-start space-y-4">
      <div>
        <h1 className="font-semibold">{title}</h1>
        <h2
          className="mt-2 mb-4 leading-[3rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></h2>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image src={images[0]} alt="gallery" />
        <div className="grid grid-cols-1 gap-8">
          <Image src={images[1]} alt="gallery" />
          <Image src={images[2]} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default GridSection;
