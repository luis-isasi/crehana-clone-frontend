import type { ReactElement } from 'react';

import { useQuery } from 'react-query';
import Head from 'next/head';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import BannerToPremium from '@Components/banners/BannerToPremium';
import BannerSlider from './components/BannerSlider';
import Routing from './components/Routing';
import CoursesByDefault from './sections/CoursesByDefault';
import { getCourses } from '@Services/course';
import { Category } from '@Types';

import Layout from './Layout';
import React from 'react';

interface Props {
  selectedCategorySlug?: string | undefined;
  selectedSubCategorySlug?: string | undefined;
  selectedCategoryName?: string | undefined;
  selectedSubCategoryName?: string | undefined;
  categories: Category[];
}

const CoursesOnline: React.FC<Props> & {
  getLayout(page: ReactElement): JSX.Element;
} = ({
  selectedCategoryName,
  selectedSubCategoryName,
  selectedCategorySlug,
  selectedSubCategorySlug,
}) => {
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
