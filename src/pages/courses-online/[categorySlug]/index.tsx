import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories } from '@Services/coursesOnline';
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
  return {
    props: { categorySlug: params?.categorySlug },
  };
};
