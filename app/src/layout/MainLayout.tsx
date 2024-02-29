import React from 'react';
import { Helmet } from 'react-helmet';
import HeadSection from '../components/sections/HeadSection';
import Footer from '../components/footer/Footer';

interface MainProps {
  children: React.ReactNode;
  title: string;
  description: string;
  headerImage?: string;
  scrollText?: boolean;
  content?: React.ReactNode;
}

const MainLayout = ({
  children,
  title,
  description,
  headerImage,
  scrollText,
  content,
}: MainProps) => {
  return (
    <div className="w-full h-full relative">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <HeadSection
        image={headerImage || ''}
        content={content}
        scrollText={scrollText}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
