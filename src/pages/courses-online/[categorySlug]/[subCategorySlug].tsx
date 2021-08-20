import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories } from '@Services/coursesOnline';
export { default } from '@Views/CoursesOnline';

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = await getCategories();
  const {
    categorySlug: selectedCategorySlug,
    subCategorySlug: selectedSubCategorySlug,
  } = params;

  let selectedCategoryName: string;
  let selectedSubCategoryName: string;

  //get the name of the selected category and sub category
  categories.forEach(({ slug, name, subCategories }) => {
    if (slug === selectedCategorySlug) {
      selectedCategoryName = name;
      subCategories.forEach(({ slug, name }) => {
        if (slug === selectedSubCategorySlug) {
          selectedSubCategoryName = name;
        }
      });
    }
  });

  return {
    props: {
      selectedCategorySlug,
      selectedSubCategorySlug,
      selectedCategoryName,
      selectedSubCategoryName,
      categories,
    },
  };
};
