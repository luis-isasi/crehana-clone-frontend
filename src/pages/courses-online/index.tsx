import { GetStaticProps } from 'next';

import category from '@Services/categories';

export { default } from '@Views/CoursesOnline';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await category.getAll();

  return { props: { categories } };
};
