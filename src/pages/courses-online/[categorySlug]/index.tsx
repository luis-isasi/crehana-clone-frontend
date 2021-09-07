import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { getCategories } from '@Services/course';
export { default } from '@Views/CoursesOnline';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

  const paths = categories.map(({ slug: categorySlug }) => {
    return { params: { categorySlug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('categories', getCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
