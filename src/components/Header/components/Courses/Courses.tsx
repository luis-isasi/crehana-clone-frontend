import { useState, useRef } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Categories from './Categories';
import ModalBaseBlur from '@Modals/components/ModalBaseBlur';

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
