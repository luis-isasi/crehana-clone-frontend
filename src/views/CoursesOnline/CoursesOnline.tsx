import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import category from '@Services/categories';
import CoursesByCategory from './GetCourses/CoursesByCategory';
import CoursesBySubCategory from './GetCourses/CoursesBySubCategoy';
import AllCourses from './GetCourses/AllCourses';

import Layout from './Layout/Layout';

const CoursesOnline: React.FC & {
  getLayout(page: ReactElement): JSX.Element;
} = () => {
  const { query } = useRouter();
  const { data: categories } = useQuery('categories', () => category.getAll());

  const categorySlug = query.categorySlug as string;
  const subCategorySlug = query.subCategorySlug as string;

  let categoryId: number, subCategoryId: number;

  //get categoyId and subCategoryId
  categories.forEach(({ slug, subCategories, id }) => {
    if (slug === categorySlug) {
      categoryId = id;
      subCategories.forEach(({ slug, id }) => {
        if (slug === subCategorySlug) {
          subCategoryId = id;
        }
      });
    }
  });

  return (
    <div className="grid grid-flow-row gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
      {!categorySlug && !subCategorySlug && <AllCourses />}
      {categorySlug && !subCategorySlug && (
        <CoursesByCategory categoryId={categoryId} />
      )}
      {categorySlug && subCategorySlug && (
        <CoursesBySubCategory subCategoryId={subCategoryId} />
      )}
    </div>
  );
};

CoursesOnline.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CoursesOnline;
