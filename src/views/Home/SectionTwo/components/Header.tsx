import Button from './Button';

import {
  RECOMENDATIONS,
  MENTORS,
  EXCLUSIVE_PREMIUM,
  YOUR_ACTIVITY,
  CONTAINER_HOME,
} from '../../contants';
import { SelectedName } from '../types';

interface Props {
  isSelectedBtn: SelectedName;
  setIsSelectedBtn: (isSelectedBtn: SelectedName) => void;
}

const Header: React.FC<Props> = ({ isSelectedBtn, setIsSelectedBtn }) => {
  const isSelect = (name) => {
    if (name === isSelectedBtn) {
      return true;
    } else return false;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as any;
    setIsSelectedBtn(name);
  };

  return (
    <header
      className={`${CONTAINER_HOME} bg-base-dark  z-10 sticky top-0 h-auto flex items-center px-4 mt-4 box-border text-gray-300 md:text-base lg:text-lg whitespace-nowrap overflow-x-auto scrool-none`}
    >
      <Button
        name={RECOMENDATIONS}
        onClick={handleClick}
        text="Recomendaciones"
        isSelect={isSelect(RECOMENDATIONS)}
      />
      <Button
        name={MENTORS}
        onClick={handleClick}
        isSelect={isSelect(MENTORS)}
        text="Mentores"
      />
      <Button
        name={EXCLUSIVE_PREMIUM}
        onClick={handleClick}
        isSelect={isSelect(EXCLUSIVE_PREMIUM)}
        text="Exclusio Premium"
      />
      <Button
        name={YOUR_ACTIVITY}
        onClick={handleClick}
        isSelect={isSelect(YOUR_ACTIVITY)}
        text="Tu actividad"
      />
    </header>
  );
};

export default Header;
