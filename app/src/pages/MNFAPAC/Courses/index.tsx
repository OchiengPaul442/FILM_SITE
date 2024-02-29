import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../../layout/MainLayout';
import CourseImage from '/images/course.png';
import FilmLinkSection from '@components/sections/FilmLinkSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCourses = [
    { id: 1, title: 'Course 1', fees: '200', status: false },
    { id: 2, title: 'Course 2', fees: '200', status: true },
    { id: 3, title: 'Course 3', fees: '200', status: false },
    { id: 4, title: 'Course 4', fees: '200', status: true },
    { id: 5, title: 'Course 4', fees: '200', status: true },
    { id: 6, title: 'Course 4', fees: '200', status: true },
    { id: 7, title: 'Course 4', fees: '200', status: true },
    { id: 8, title: 'Course 4', fees: '200', status: true },
  ];

  const [courses, setCourses] = useState(allCourses.slice(0, 4));

  const loadMoreCourses = () => {
    const numberOfCourses = courses.length;
    const moreCourses = allCourses.slice(numberOfCourses, numberOfCourses + 2);
    setCourses(courses.concat(moreCourses));
  };

  return (
    <>
      <MainLayout
        title="MNFAPAC"
        description="MNFAPAC"
        headerImage={CourseImage}
        scrollText={false}
        content={null}
      >
        {/* courses */}
        <div className="bg-black text-white p-10">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h1 className="font-bold">Courses</h1>
              <p className="border-l border-[#A06E17] w-[45%] pl-[20px]">
                If you're ready to apply for one (or more!) of our classes,
                you've come to the right place.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10">
              {courses.map((course, index) => (
                <Link
                  to={`/course/${course.id}`}
                  key={index}
                  className="flex justify-between border-t border-gray-600 py-2 px-2 rounded-b-lg hover:bg-gray-800 transition-all duration-300 ease-in-out"
                >
                  <div>
                    <h4 className="font-bold mb-2">{course.title}</h4>
                    <p className="mb-2">Fees: ${course.fees}</p>
                    <a href="#">
                      <span className="text-[#A06E17] mr-1">
                        More Information
                      </span>
                      -
                      <span className="hover:underline ml-1">
                        Applications OPEN
                      </span>
                    </a>
                  </div>
                  <img
                    src={CourseImage}
                    alt="Status"
                    className="object-contain"
                    width={160}
                    height={160}
                  />
                </Link>
              ))}
              {courses.length < allCourses.length && (
                <button
                  onClick={loadMoreCourses}
                  className="bg-transparent text-white py-2 px-4 border-2 border-white rounded mt-4"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Film page link */}
        <FilmLinkSection />
      </MainLayout>
    </>
  );
};

export default Index;
