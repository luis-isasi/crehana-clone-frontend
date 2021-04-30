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

const SwitchSliderMovil: React.FC<Props> = ({
  selectedIndex,
  totalSections,
  handlePreviousAndNext,
}) => {
  return (
    <div className="flex items-center justify-center mb-7">
      <button
        disabled={selectedIndex === 1}
        className="disabled:text-gray-400 outline-none focus:outline-none mx-8"
        onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
      >
        <ArrowBackIosRoundedIcon />
      </button>
      <span>
        <strong>{`${selectedIndex}`}</strong>
        {` / ${totalSections}`}
      </span>
      <button
        disabled={selectedIndex === totalSections}
        className="disabled:text-gray-400 outline-none focus:outline-none mx-8"
        onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ArrowBackIosRoundedIcon className="transform rotate-180" />
      </button>
    </div>
  );
};

export default SwitchSliderMovil;
