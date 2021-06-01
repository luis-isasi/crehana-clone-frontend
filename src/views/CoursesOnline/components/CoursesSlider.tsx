import { useRef } from 'react';

import { Banner } from '@Types';
import SwitchSecondaryPoints from '@Components/Slider/SwitchWithPoints/SwitchSecondaryPoints';
import Link from '@Components/Links/Link';

interface Props {
  banners: Banner[];
}

const CoursesSlider: React.FC<Props> = ({ banners }) => {
  const sliderRef = useRef<HTMLUListElement>();

  console.log({ banners });

  const renderCards = () => {
    return banners.map(
      ({ id, backgroundImage, title, subtitle, ctaUrl, ctaLabel }) => (
        <li
          key={`course-slider-${id}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="h-full w-full text-white flex flex-col justify-center items-start box-border px-15"
        >
          <h4 className="font-extrabold text-2xl mb-1">{title}</h4>
          <p className="text-base mb-2">{subtitle}</p>
          <Link
            href={ctaUrl}
            className="px-10 py-3 bg-primary-main hover:bg-primary-light rounded-md font-bold shadow-md"
          >
            {ctaLabel}
          </Link>
        </li>
      )
    );
  };

  return (
    <div className="min-h-76 h-76 w-full relative overflow-hidden">
      <ul
        ref={sliderRef}
        style={{ width: `${banners?.length}00%` }}
        className="h-full flex"
      >
        {renderCards()}
      </ul>
      <div className="absolute bottom-0 w-full my-3">
        <SwitchSecondaryPoints
          sliderRef={sliderRef}
          totalSections={banners?.length}
          automaticSlider={true}
          duration={400}
        />
      </div>
    </div>
  );
};

export default CoursesSlider;
