import { GetStaticProps } from 'next';

import { getCategories } from '@Services/coursesOnline';

export { default } from '@Views/CoursesOnline';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getCategories();

  return { props: { categories } };
};
