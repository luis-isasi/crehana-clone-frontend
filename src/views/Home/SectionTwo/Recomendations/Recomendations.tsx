import { useRef, useState } from 'react';
import Image from 'next/image';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const Recomendations = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const ulRef = useRef<HTMLUListElement>();

  const NEXT = 'NEXT';
  const PREVIOUS = 'PREVIOUS';

  const renderImg = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return array.map((index) => {
      return (
        <li
          key={index}
          className="relative h-full w-full rounded-md overflow-hidden"
        >
          <Image
            layout="fill"
            loader={({ src }) => `${src}`}
            src={'https://source.unsplash.com/random'}
            // width={480}
            // height={352}
            className="object-cover"
          />
        </li>
      );
    });
  };

  const handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS,
    newIndex: number
  ) => () => {
    if (selectedIndex === 12 && type === NEXT) return;
    if (selectedIndex === 1 && type === PREVIOUS) return;

    ulRef.current.animate(
      [
        {
          marginLeft: `-${newIndex - 1}00%`,
        },
      ],
      {
        duration: 150,
        iterations: 1,
        easing: 'ease-in',
        fill: 'forwards',
      }
    );
    setSelectedIndex(newIndex);
  };

  return (
    <div className="w-full box-border pb-10 ">
      <div className="px-4 box-border max-h-56 overflow-visible">
        <h2 className="text-lg font-bold mb-5 mt-1">
          Nuevos cursos, nuevos retos
        </h2>
        <div className="h-98 w-full overflow-hidden flex flex-col ">
          <ul ref={ulRef} className="flex h-88 w-1200">
            {renderImg()}
          </ul>
        </div>
      </div>
      <div className="bg-primary-light h-62  flex-grow flex  flex-col items-center justify-end">
        <div className="flex items-center justify-center mb-7">
          <button
            disabled={selectedIndex === 1}
            className="disabled:text-gray-400 outline-none focus:outline-none mx-8"
            onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
          >
            <ArrowBackIosRoundedIcon />
          </button>
          <span>
            <strong>{`${selectedIndex}`}</strong> / 12
          </span>
          <button
            disabled={selectedIndex === 12}
            className="disabled:text-gray-400 outline-none focus:outline-none mx-8"
            onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
          >
            <ArrowBackIosRoundedIcon className="transform rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
