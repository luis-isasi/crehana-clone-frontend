const CoursesByCategorie = (props) => {
  console.log({ props });

  return <div> CURSOS CON LA CATEGORIA: {`${props.params.categorie}`}</div>;
};

export default CoursesByCategorie;
