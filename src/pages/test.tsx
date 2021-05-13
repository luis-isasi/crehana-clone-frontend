import { useState, useEffect, useRef } from 'react';

const Test = () => {
  const [state, setstate] = useState(1);
  console.log({ state });

  return (
    <div className="h-76 w-full bg-blue-500">
      {state === 3 || <Test2 state={state} />}

      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        CLICK
      </button>
    </div>
  );
};

const Test2 = (state) => {
  const divRef = useRef<HTMLDivElement>();

  useEffect(() => {
    console.log('corriendo useEffect');

    return () => {
      console.log('corriendo cleanup function ');
      divRef.current.style.margin = '8px';
    };
  }, [state]);

  return <div ref={divRef} className="h-20 w-full bg-red-500"></div>;
};

export default Test;
