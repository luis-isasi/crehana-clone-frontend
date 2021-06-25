import { useState } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Categories from './Categories';
import ModalBaseBlur from '@Modals/components/ModalBaseBlur';

const Courses: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:mx-5 xl:mx-7 min-w-max relative">
      <button
        onClick={onClick}
        className="py-1 text-sm font-semibold hover:opacity-80 leading-none outline-none focus:outline-none"
      >
        Cursos <ExpandMoreIcon />
      </button>
      {isOpen && (
        <>
          <Categories />
          <ModalBaseBlur className="top-18" />
        </>
      )}
    </div>
  );
};

export default Courses;
