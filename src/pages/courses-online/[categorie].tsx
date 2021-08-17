import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories } from '@Services';
export { default } from '@Views/CoursesOnline';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

  let paths = [];
  categories.forEach(({ slug, subCategories }) => {
    paths.push({ params: { categorie: slug } });
    subCategories.forEach(({ slug }) => {
      paths.push({ params: { categorie: slug } });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { categorie: params?.categorie },
  };
};
