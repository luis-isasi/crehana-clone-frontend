import Button from './Button';

import {
  RECOMENDATIONS,
  MENTORS,
  EXCLUSIVE_PREMIUM,
  YOUR_ACTIVITY,
} from '../contants';
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
    <header className="h-auto flex items-center  text-gray-300 whitespace-nowrap  overflow-x-scroll scrool-none">
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
