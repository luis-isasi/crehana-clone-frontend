import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import { getCategories } from '@Services';

const Mouse = (props) => {
  console.log({ props });

  return <div>DESDE MOUSE</div>;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categories = await getCategories();
//   console.log({ categories });

//   return {
//     paths: [{ params: {} }],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {},
//   };
// };

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await getCategories();
  console.log({ categories });

  return {
    props: { categories },
  };
};

export default Mouse;
