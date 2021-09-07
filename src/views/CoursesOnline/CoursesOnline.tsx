import * as React from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';

import CoursesByDefault from './sections/CoursesByDefault';
import { getCourses } from '@Services/course';
import { Category } from '@Types';

import Layout from './Layout';

interface Props {
  categories: Category[];
}

const CoursesOnline: React.FC<Props> & {
  getLayout(page: ReactElement): JSX.Element;
} = () => {
  //Query for filters
  const { data, isLoading, isError } = useQuery('course', () => getCourses());

  return (
    <React.Fragment>
      <Head>
        <title>Cursos recomendados por la comunida crehana | Crehana</title>
      </Head>
      <CoursesByDefault />
    </React.Fragment>
  );
};

CoursesOnline.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CoursesOnline;
