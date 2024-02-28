import React from 'react';

interface CarouselProps {
  width?: string;
  height?: string;
  fill?: string;
}

const LeftArrow: React.FC<CarouselProps> = ({ width, height, fill }) => {
  return (
    <svg
      fill={fill || '#fff'}
      height={height || '200px'}
      width={width || '200px'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.006 512.006"
      xmlSpace="preserve"
    >
      <path d="M388.419 475.59L168.834 256.005 388.418 36.421c8.341-8.341 8.341-21.824 0-30.165s-21.824-8.341-30.165 0L123.586 240.923c-8.341 8.341-8.341 21.824 0 30.165l234.667 234.667a21.275 21.275 0 0015.083 6.251 21.277 21.277 0 0015.083-6.251c8.341-8.341 8.341-21.824 0-30.165z" />
    </svg>
  );
};

export default LeftArrow;
