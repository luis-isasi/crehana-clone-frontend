import * as React from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';

import coursesService from '@Services/course';
import { Category } from '@Types/course';
import CourseCard from '@Components/CourseCard';

import Layout from './Layout';

interface Props {
  categories: Category[];
}

const CoursesOnline: React.FC<Props> & {
  getLayout(page: ReactElement): JSX.Element;
} = ({ categories }) => {
  //Query for filters
  const { data, isLoading } = useQuery('courses', () =>
    coursesService.getAll()
  );

  const renderCourses = () => {
    return data.courses.map((course, i) => {
      return <CourseCard key={`${course.id}-${i}`} course={course} />;
    });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Cursos recomendados por la comunida crehana | Crehana</title>
      </Head>
      <div className="grid grid-flow-row gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 ">
        {!isLoading && data && renderCourses()}
      </div>
    </React.Fragment>
  );
};

CoursesOnline.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CoursesOnline;
