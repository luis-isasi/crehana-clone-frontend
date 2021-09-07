import { useState } from 'react';
import dynamic from 'next/dynamic';

import { SelectedName } from '@Views/Home/contants';
import Header from './components/Header';
import Recomendations from './sections/Recomendations';

const Mentors = dynamic(() => import('./sections/Mentors'));
const ExclusivePremium = dynamic(() => import('./sections/ExclusivePremium'));
const YourActivity = dynamic(() => import('./sections/YourActivity'));

const SectionTwo = () => {
  const [isSelectedBtn, setIsSelectedBtn] = useState<SelectedName>(
    SelectedName.RECOMENDATIONS
  );

  const renderIsSelect = () => {
    switch (isSelectedBtn) {
      case SelectedName.RECOMENDATIONS:
        return <Recomendations />;
      case SelectedName.MENTORS:
        return <Mentors />;
      case SelectedName.EXCLUSIVE_PREMIUM:
        return <ExclusivePremium />;
      case SelectedName.YOUR_ACTIVITY:
        return <YourActivity />;
    }
  };

  return (
    <section className="dark:bg-base-lighter-16  h-auto w-full pt-5 ">
      <Header
        isSelectedBtn={isSelectedBtn}
        setIsSelectedBtn={setIsSelectedBtn}
      />
      {renderIsSelect()}
    </section>
  );
};

export default SectionTwo;
