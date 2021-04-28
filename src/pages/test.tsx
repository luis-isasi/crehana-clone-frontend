import { useRef, useEffect } from 'react';

const test = () => {
  const cardRef = useRef<HTMLDivElement>();

  const handleClickOutside = (e) => {
    if (!cardRef.current.contains(e.target)) {
      console.log('click fuera del div');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={cardRef} className={`bg-white h-20 w-20`}>
      DIV
    </div>
  );
};

export default test;
