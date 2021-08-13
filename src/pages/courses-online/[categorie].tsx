import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories } from '@Services';
import { categoriesToParams } from '@Utils';

const Mouse = (props) => {
  console.log({ props });

  return <div> CURSOS CON LA CATEGORIA: {`${props.params.categorie}`}</div>;
};

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

export default Mouse;
