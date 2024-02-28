import React from 'react';

interface CarouselProps {
  width?: string;
  height?: string;
  fill?: string;
}

const RightArrow: React.FC<CarouselProps> = ({ width, height, fill }) => {
  return (
    <svg
      fill={fill || '#fff'}
      height={height || '200px'}
      width={width || '200px'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.005 512.005"
      xmlSpace="preserve"
    >
      <path d="M388.418 240.923L153.751 6.256c-8.341-8.341-21.824-8.341-30.165 0s-8.341 21.824 0 30.165L343.17 256.005 123.586 475.589c-8.341 8.341-8.341 21.824 0 30.165a21.275 21.275 0 0015.083 6.251 21.277 21.277 0 0015.083-6.251l234.667-234.667c8.34-8.34 8.34-21.823-.001-30.164z" />
    </svg>
  );
};

export default RightArrow;
