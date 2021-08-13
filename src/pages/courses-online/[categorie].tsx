import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories } from '@Services';
import { categoriesToParams } from '@Utils';
export { default } from '@Views/CoursesByCategorie';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categoriesToParams(categories);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { params },
  };
};
