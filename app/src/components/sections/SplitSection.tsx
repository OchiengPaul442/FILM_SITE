import React from 'react';
import Arrow_Down_Right_LG from '/icons/MNFAPAC/Arrow_Down_Right_LG.png';
import { Link } from 'react-router-dom';

interface SplitSectionProps {
  title: string;
  subText: string;
  btnText: string;
  images: string[];
}

const SplitSection: React.FC<SplitSectionProps> = ({
  title,
  subText,
  btnText,
  images,
}) => {
  return (
    <div className="relative h-screen w-full flex bg-[#A06E17]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative flex flex-col justify-center items-start space-y-12">
          <div className="relative">
            <div className="items-center">
              <img
                src={Arrow_Down_Right_LG}
                alt="Arrow Down Right"
                width={40}
                className="top-[-30px] left-[-24px] relative"
              />
            </div>
            <h1
              className="font-semibold text-[64px] leading-[4rem]"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>
          <p
            className="mt-2 mb-4 leading-[1.5rem] w-[70%]"
            dangerouslySetInnerHTML={{ __html: subText }}
          ></p>
          <Link
            to={'/courses'}
            className="bg-transparent text-white py-2 px-4 border border-white"
          >
            {btnText}
            <span className="ml-4">{'-->'}</span>
          </Link>
        </div>
        <div className="relative flex justify-center align-middle w-full h-full">
          <img
            src={images[0]}
            alt="Main Image"
            className="w-[90%] mx-auto z-20 object-contain"
          />

          <img
            src={images[1]}
            alt="Top Right Image"
            className="absolute top-[110px] right-[-25px] w-[35%] z-10 opacity-50 object-contain"
          />

          <img
            src={images[2]}
            alt="Bottom Right Image"
            className="absolute bottom-[100px] left-[-110px] w-[35%] z-10 opacity-50 object-contain"
          />
          <span className="w-[105px] h-[7px] bg-white absolute bottom-[0] right-0" />
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
