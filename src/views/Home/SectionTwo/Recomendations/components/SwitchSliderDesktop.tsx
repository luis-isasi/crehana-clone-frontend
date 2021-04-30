import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import { PREVIOUS, NEXT } from '../../../contants';

interface Props {
  selectedIndex: number;
  totalSections: number;
  handlePreviousAndNext: (
    type: typeof PREVIOUS | typeof NEXT,
    newIndex: number
  ) => () => void;
}

const SwitchSliderDesktop: React.FC<Props> = ({
  selectedIndex,
  totalSections,
  handlePreviousAndNext,
}) => {
  return (
    <div className="flex items-center justify-between min-w-47">
      <span>
        <strong>{`${selectedIndex}`}</strong>
        {` / ${totalSections}`}
      </span>
      <div className="min-w-28 flex items-center justify-between">
        <button
          disabled={selectedIndex === 1}
          className="border disabled:border-transparent border-gray-400 hover:border-secondary-main focus:border-secondary-main focus:outline-none text-secondary-main disabled:text-gray-400 p-3 rounded-md"
          onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
        >
          <ArrowBackIosRoundedIcon />
        </button>

        <button
          disabled={selectedIndex === totalSections}
          className="border disabled:border-transparent border-gray-400 hover:border-secondary-main focus:border-secondary-main focus:outline-none text-secondary-main disabled:text-gray-400 p-3 rounded-md "
          onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
        >
          <ArrowBackIosRoundedIcon className="transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SwitchSliderDesktop;
