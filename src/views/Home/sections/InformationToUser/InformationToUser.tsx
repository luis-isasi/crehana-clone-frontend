import { useState } from 'react';
import dynamic from 'next/dynamic';

import { SelectedName } from './types';
import {
  RECOMENDATIONS,
  EXCLUSIVE_PREMIUM,
  MENTORS,
  YOUR_ACTIVITY,
} from '@Views/Home/contants';
import Header from './components/Header';
import Recomendations from './sections/Recomendations';

const Mentors = dynamic(() => import('./sections/Mentors'));
const ExclusivePremium = dynamic(() => import('./sections/ExclusivePremium'));
const YourActivity = dynamic(() => import('./sections/YourActivity'));

const SectionTwo = () => {
  const [isSelectedBtn, setIsSelectedBtn] = useState<SelectedName>(
    RECOMENDATIONS
  );

  const renderIsSelect = () => {
    switch (isSelectedBtn) {
      case RECOMENDATIONS:
        return <Recomendations />;
      case MENTORS:
        return <Mentors />;
      case EXCLUSIVE_PREMIUM:
        return <ExclusivePremium />;
      case YOUR_ACTIVITY:
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
