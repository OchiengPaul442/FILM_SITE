import { useEffect } from 'react';
import MainLayout from '@src/layout/MainLayout';
import CourseDetails from '/images/courseDetails.png';
import CourseDetails2 from '/images/courseDetails2.png';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout
      title="MNFAPAC"
      description="MNFAPAC"
      headerImage={CourseDetails}
      scrollText={false}
      content={null}
    >
      <div className="container space-y-8 border-b border-[#B7B7B7]">
        <h1 className="font-bold mb-2">Picture Shop Feature</h1>
        <h3 className="mb-4 border-l border-[#A06E17] pl-[25px] w-[80%]">
          Lorem Ipsum is simply dummy text of the printing, and typesetting
          industry. Lorem Ipsum.
        </h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <img
          src={CourseDetails2}
          alt="Historical Reenactment"
          className="w-full h-auto mb-4 rounded shadow max-h-[500px]"
        />

        <div className="border-l border-[#A06E17] pl-[25px]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="mt-8">
            <span>John Doe</span>
            <br />
            <span className="text-sm italic">Creative Director</span>
          </div>
        </div>

        <p className="mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </p>
      </div>
    </MainLayout>
  );
};

export default Index;
