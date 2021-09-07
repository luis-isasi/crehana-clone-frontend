import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import category from '@Services/categories';
export { default } from '@Views/CoursesOnline';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await category.getAll();

  const paths = categories.map(({ slug: categorySlug }) => {
    return { params: { categorySlug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('categories', category.getAll);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
