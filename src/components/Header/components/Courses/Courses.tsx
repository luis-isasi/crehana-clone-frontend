import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CategoriesLoading from './Categories/components/CategoriesLoading';

import ModalBaseBlur from '@Modals/components/ModalBaseBlur';
const Categories = dynamic(() => import('./Categories'), {
  loading: () => <CategoriesLoading />,
});

const Courses: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const refBtn = useRef<HTMLButtonElement>();

  const closeCategories = () => {
    setIsOpen(false);
  };

  const onClick = () => {
    if (!isOpen) setIsOpen(true);
  };

  return (
    <div className="lg:mx-5 xl:mx-7 min-w-max relative">
      <button
        ref={refBtn}
        onClick={onClick}
        className="py-1 text-sm font-semibold hover:opacity-80 leading-none outline-none focus:outline-none"
      >
        Cursos <ExpandMoreIcon />
      </button>
      {isOpen && (
        <>
          <Categories
            refBtn={refBtn}
            isOpen={isOpen}
            closeCategories={closeCategories}
          />
          <ModalBaseBlur className="top-18" />
        </>
      )}
    </div>
  );
};

export default Courses;
