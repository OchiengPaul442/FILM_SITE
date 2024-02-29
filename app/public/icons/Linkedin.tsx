import React from 'react';

interface LinkedinProps {
  width?: string;
  height?: string;
  fill?: string;
}

const Linkedin: React.FC<LinkedinProps> = ({ width, height, fill }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M144 7339h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V7339h-4v-13h4v1.462s1.255-2.202 4.083-2.202c2.829 0 4.917 1.726 4.917 5.298V7339zm-17.558-15.079a2.451 2.451 0 01-2.442-2.461 2.451 2.451 0 012.442-2.46 2.451 2.451 0 012.441 2.46 2.45 2.45 0 01-2.441 2.461zM124 7339h5v-13h-5v13z"
        transform="translate(-180 -7479) translate(56 160)"
        fill={fill || '#000'}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Linkedin;
