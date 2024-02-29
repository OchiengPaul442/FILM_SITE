// import React from 'react';
import MainLayout from '../../layout/MainLayout';
import Film from '/images/film.png';

const index = () => {
  return (
    <MainLayout
      title="MNFAPAC"
      description="MNFAPAC"
      headerImage={Film}
      scrollText={false}
      content={
        <div className="absolute text-center bottom-0 left-0 transform translate-y-1/2 z-20">
          <h4>Ndagire Mariam Film Academy</h4>
          <h1>Lights. Camera. Action.</h1>
        </div>
      }
    >
      <></>
    </MainLayout>
  );
};

export default index;
