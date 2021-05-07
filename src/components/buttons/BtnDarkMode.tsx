import { useContextTheme } from '@Context/contextTheme';
import Switch from '@Components/Switch';
import { DARK } from '@Constans';

const BtnDarkMode = () => {
  const { theme, changeTheme } = useContextTheme();

  const handleClick = () => {
    changeTheme();
  };

  return (
    <Switch
      isActive={theme === DARK ? true : false}
      handleClick={handleClick}
    />
  );
};

export default BtnDarkMode;
