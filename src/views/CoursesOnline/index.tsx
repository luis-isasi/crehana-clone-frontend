import Head from 'next/head';

import CoursesOnline from './CoursesOnline';

const index = (props) => {
  return (
    <>
      <Head>
        <title>Cursos recomendados por la comunida crehana | Crehana</title>
      </Head>
      <CoursesOnline {...props} />
    </>
  );
};

export default index;
