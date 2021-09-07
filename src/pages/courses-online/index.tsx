import { GetStaticProps } from 'next';

import { getCategories } from '@Services/course';

export { default } from '@Views/CoursesOnline';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getCategories();

  return { props: { categories } };
};
