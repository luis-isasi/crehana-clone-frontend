import dynamic from 'next/dynamic';
import { useState } from 'react';

import { SelectedName } from './types';
import {
  RECOMENDATIONS,
  EXCLUSIVE_PREMIUM,
  MENTORS,
  YOUR_ACTIVITY,
} from '../contants';
import Header from './components/Header';
import Recomendations from './Recomendations';

const Mentors = dynamic(() => import('./Mentors'));
const ExclusivePremium = dynamic(() => import('./ExclusivePremium'));
const YourActivity = dynamic(() => import('./YourActivity'));

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
    <section className="bg-base-dark h-auto w-full overflow-hidden">
      <Header
        isSelectedBtn={isSelectedBtn}
        setIsSelectedBtn={setIsSelectedBtn}
      />
      {renderIsSelect()}
    </section>
  );
};

export default SectionTwo;
