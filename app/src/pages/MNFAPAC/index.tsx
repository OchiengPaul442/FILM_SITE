// import React from 'react'
import MainLayout from '../../layout/MainLayout';
import StudioImage from '/images/studio.png';
import VideoSection from '@components/sections/VideoSection';
import Thumbnail from '/images/Thumbnail.png';
// components
import SplitSection from '@components/sections/SplitSection';
import GridSection from '@components/sections/GridSection';
import Carousel from '@components/carousel/Carousel';
// images
import Gallary1 from '/images/MNFAPAC/gallary1.png';
import Gallary2 from '/images/MNFAPAC/gallary2.png';
import Gallary3 from '/images/MNFAPAC/gallary3.png';
import Stories1 from '/images/MNFAPAC/stories1.png';
import Stories2 from '/images/MNFAPAC/stories2.png';
import Stories3 from '/images/MNFAPAC/stories3.png';

const index = () => {
  const videoURL =
    'https://res.cloudinary.com/dndsupym8/video/upload/v1709123880/MNFAPAC_PROJECT/Videos/eae6e04ujzdbxibvizz4.mp4';

  const data = [
    {
      name: 'Paul Ochieng',
      title: 'Actor',
      subText:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
      class: 'class of 11',
      image: { Stories2 },
    },
    {
      name: 'Paul Ochieng',
      title: 'Actor',
      subText:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
      class: 'class of 11',
      image: { Stories2 },
    },
    {
      name: 'Paul Ochieng',
      title: 'Actor',
      subText:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
      class: 'class of 11',
      image: { Stories2 },
    },
  ];

  return (
    <MainLayout
      title="MNFAPAC"
      description="MNFAPAC"
      headerImage={StudioImage}
      scrollText={true}
      content={
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <h4>Ndagire Mariam Film Academy</h4>
          <h1>Lights. Camera. Action.</h1>
        </div>
      }
    >
      {/* section two */}
      <div className="relative h-screen">
        <VideoSection src={videoURL} poster={Thumbnail} />
      </div>

      {/* section three */}
      <GridSection
        title="Academy Gallery"
        description={`Take a look at what we do, <br/>
        how we do it`}
        images={[Gallary1, Gallary2, Gallary3]}
      />

      {/* section four */}
      <SplitSection
        title="Telling our stories
        from the source"
        subText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.`}
        btnText="View programs"
        images={[Stories1, Stories2, Stories3]}
      />

      {/* section five */}
      <Carousel
        title={'Hear it directly <br/> from our alumni'}
        data={data.map((item) => ({ ...item, image: item.image.Stories2 }))}
        sectionColor="#8D0303"
      />
    </MainLayout>
  );
};

export default index;
