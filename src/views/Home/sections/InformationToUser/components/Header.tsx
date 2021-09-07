import Button from './Button';

import {
  RECOMENDATIONS,
  MENTORS,
  EXCLUSIVE_PREMIUM,
  YOUR_ACTIVITY,
  CONTAINER_HOME,
} from '@Views/Home/contants';
import { SelectedName } from '@Views/Home/contants';

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
    setIsSelectedBtn(name as SelectedName);
  };

  return (
    <header
      className={`w-full h-auto bg-white dark:bg-base-dark sticky top-0 z-4`}
    >
      <div
        className={`${CONTAINER_HOME} h-auto flex items-center px-4 box-border text-gray-300 md:text-base lg:text-lg whitespace-nowrap overflow-x-auto scrool-none`}
      >
        <Button
          name={SelectedName.YOUR_ACTIVITY}
          onClick={handleClick}
          text="Recomendaciones"
          isSelect={isSelect(RECOMENDATIONS)}
        />
        <Button
          name={SelectedName.MENTORS}
          onClick={handleClick}
          isSelect={isSelect(MENTORS)}
          text="Mentores"
        />
        <Button
          name={SelectedName.EXCLUSIVE_PREMIUM}
          onClick={handleClick}
          isSelect={isSelect(EXCLUSIVE_PREMIUM)}
          text="Exclusio Premium"
        />
        <Button
          name={SelectedName.YOUR_ACTIVITY}
          onClick={handleClick}
          isSelect={isSelect(YOUR_ACTIVITY)}
          text="Tu actividad"
        />
      </div>
    </header>
  );
};

export default Header;
