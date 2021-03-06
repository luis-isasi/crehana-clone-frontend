import { useEffect } from 'react';

import Header from '@Components/Header';
import Footer from '@Components/Footer';
import { useContextTheme } from '@Context/contextTheme';
import { DARK } from '@Constans';
interface Props {
  enabledDark?: boolean;
  darkMode?: boolean;
}

const Layout: React.FC<Props> = ({ enabledDark, children, darkMode }) => {
  const { theme, changeTheme } = useContextTheme();

  //ejecutamos un useEffect solo para habilitar el dark mode dentro de home
  //hasta la fecha en crehana estaba asi y para evitar pensar en como serian sus demas componentes en dark mode
  //decidí solo habilitarlo en"/home", quizas mas adelante lo habilitaré para toda la aplicación
  useEffect(() => {
    if (!enabledDark && theme === DARK) {
      //To light
      changeTheme();
    }
  }, [enabledDark]);

  return (
    <div className={`${darkMode && 'dark bg-base-main'} w-full h-auto`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
