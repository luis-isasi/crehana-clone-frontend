import { useRef } from 'react';
import { useQuery } from 'react-query';

import { Banner } from 'src/Types';
import SwitchSecondaryPoints from '@Components/Slider/SwitchWithPoints/SwitchSecondaryPoints';
import Link from '@Components/Links/Link';
import { getBannersByDefault } from '@Services/banners';
import PHCoursesSliderDesktop from '@Placeholders/PHCoursesSliderDesktop';

interface Props {
  banners?: Banner[];
}

const BannerSlider: React.FC<Props> = ({ banners }) => {
  //get banners
  const { data: DataBanners, isLoading, isError } = useQuery('banners', () =>
    getBannersByDefault()
  );
  const sliderRef = useRef<HTMLUListElement>();

  //first check if there's banners in props, if there's not banners in props then we use DataBanners
  let _banners = banners || DataBanners;

  const renderCards = () => {
    return _banners.map(
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

  if (isLoading || isError) return <PHCoursesSliderDesktop />;

  if (_banners && !isLoading && !isError) {
    return (
      <div className="min-h-76 h-76 w-full relative overflow-hidden">
        <ul
          ref={sliderRef}
          style={{ width: `${_banners?.length}00%` }}
          className="h-full flex"
        >
          {renderCards()}
        </ul>
        <div className="absolute bottom-0 w-full my-3">
          <SwitchSecondaryPoints
            sliderRef={sliderRef}
            totalSections={_banners?.length}
            automaticSlider={true}
            duration={400}
          />
        </div>
      </div>
    );
  }
};

export default BannerSlider;
