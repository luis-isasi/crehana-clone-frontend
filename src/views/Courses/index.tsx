import Head from 'next/head';

import Courses from './Courses';

const index = () => {
  return (
    <>
      <Head>
        <title>Cursos recomendados por la comunida crehana | Crehana</title>
      </Head>
      <Courses />
    </>
  );
};

export default index;
