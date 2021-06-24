import { useState } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CategoriesModal from '@Modals/CategoriesModal';
const Courses: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log({ isOpen });

  const onClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mx-5  min-w-max">
      <button
        onClick={onClick}
        name="afsa"
        // px-8 lg:px-6 xl:px-8 ml-5 lg:ml-4 xl:ml-5
        className="py-1 text-sm font-semibold hover:opacity-80 leading-none outline-none focus:outline-none"
      >
        Cursos <ExpandMoreIcon />
      </button>
      {isOpen && <CategoriesModal />}
    </div>
  );
};

export default Courses;
