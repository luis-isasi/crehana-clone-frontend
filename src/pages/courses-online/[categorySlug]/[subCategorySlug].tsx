import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import category from '@Services/categories';
export { default } from '@Views/CoursesOnline';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await category.getAll();

  let paths = [];
  categories.forEach(({ subCategories, slug: categorySlug }) => {
    subCategories.forEach(({ slug: subCategorySlug }) => {
      paths.push({
        params: { categorySlug, subCategorySlug },
      });
    });
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
