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
  const categories = await getCategories();
  const { categorySlug: selectedCategorySlug } = params;

  let selectedCategoryName: string;

  //get the name of the selected category
  categories.forEach(({ slug, name }) => {
    if (slug === selectedCategorySlug) {
      selectedCategoryName = name;
    }
  });

  return {
    props: { selectedCategorySlug, categories, selectedCategoryName },
  };
};
