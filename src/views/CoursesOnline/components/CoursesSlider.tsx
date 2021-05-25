import { useRef } from 'react';
import { useQuery } from 'react-query';

import { fetcher } from '@Utils';
import SwitchSecondaryPoints from '@Components/Slider/SwitchWithPoints/SwitchSecondaryPoints';
import Link from '@Components/Links/Link';

const CoursesSlider = () => {
  const sliderRef = useRef<HTMLUListElement>();
  // fetcher({ endpoint: '/banners/' })

  // const { data, isLoading, isError } = useQuery('banners', () =>
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/banners/`).then((res) =>
  //     res.json()
  //   )
  // );

  const { data, isLoading, isError } = useQuery(
    'banners',
    fetcher({ endpoint: '/banners/' })
  );

  console.log({ data });
  const renderCards = () => {
    return Items.map(({ id, href, title, text, urlImg }) => (
      <li
        key={`course-slider-${id}`}
        style={{
          backgroundImage: `url(${urlImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-full w-full  text-white flex flex-col justify-center items-start box-border px-15"
      >
        <h4 className="font-extrabold text-2xl mb-1">{title}</h4>
        <p className="text-base mb-2">{text}</p>
        <Link
          href={href}
          className="px-10 py-3 bg-primary-main hover:bg-primary-light rounded-md font-bold shadow-md"
        >
          Ver detalles - {`${id}`}
        </Link>
      </li>
    ));
  };

  return (
    <div className="min-h-76 h-76 w-full relative overflow-hidden">
      <ul ref={sliderRef} className="w-1000 h-full flex">
        {renderCards()}
      </ul>
      <div className="absolute bottom-0 w-full my-3">
        <SwitchSecondaryPoints
          sliderRef={sliderRef}
          totalSections={10}
          automaticSlider={true}
          duration={400}
        />
      </div>
    </div>
  );
};

export default CoursesSlider;

const Items = [
  {
    id: 1,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 2,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 3,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 4,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 5,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 6,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 7,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 8,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 9,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
  {
    id: 10,
    title: 'LinkedIn: Potencia tu estrategia de ventas',
    urlImg: 'https://source.unsplash.com/random',
    text: 'Aprende a usar las herramientas de Sales Navigator y LinkedIn Ads',
    href: '/courses-online',
  },
];
