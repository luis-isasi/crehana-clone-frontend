import { useState } from 'react';

import { SelectedName } from './types';
import { RECOMENDATIONS } from './contants';
import Header from './components/Header';

const SectionTwo = () => {
  const [isSelectedBtn, setIsSelectedBtn] = useState<SelectedName>(
    RECOMENDATIONS
  );

  return (
    <section className="bg-base-dark h-auto w-full box-border p-4 overflow-hidden ">
      <Header
        isSelectedBtn={isSelectedBtn}
        setIsSelectedBtn={setIsSelectedBtn}
      />
      <div></div>
    </section>
  );
};

export default SectionTwo;
