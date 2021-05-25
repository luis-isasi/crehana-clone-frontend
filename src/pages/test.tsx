const Test = () => {
  fcn_2();
  return (
    <div className="h-76 w-full bg-blue-500">
      <img src={'https://n9.cl/g0on'} />
    </div>
  );
};

const fcn_1 = () => {
  console.log('F1');

  return () => {
    console.log('F2');

    return () => {
      console.log('F3');

      return () => {
        console.log('HOLA ');
      };
    };
  };
};

const fcn_2 = () => {
  console.log('F1');

  return fcn_1();
};

export default Test;
