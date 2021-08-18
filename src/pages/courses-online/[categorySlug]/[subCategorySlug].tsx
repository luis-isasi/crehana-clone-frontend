import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories } from '@Services/coursesOnline';
// export { default } from '@Views/CoursesOnline';

const MyComponent = () => {
  return <div> DESDE SUB CATEGORY</div>;
};

export default MyComponent;

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
  return {
    props: {
      subCategorySlug: params?.subCategorySlug,
    },
  };
};
