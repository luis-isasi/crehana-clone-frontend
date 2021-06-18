import { useState, useRef, useLayoutEffect } from 'react';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';
import LockOpenIcon from '@material-ui/icons/LockOpen';

interface Props {
  section: { title: string; classes: string[] };
}

const TemarySection: React.FC<Props> = ({ section }) => {
  const [isExpended, setIsExpended] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const refDivCollapse = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (isExpended) {
      setHeight(refDivCollapse.current.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isExpended]);

  const renderClasses = ({ classes }: { classes: string[] }) => {
    return classes.map((value) => {
      return (
        <button className="box-border px-4 w-full text-left font-light flex justify-between mb-3 focus:outline-none">
          {value}
          <LockOpenIcon className="fill-current text-base-lighter" />
        </button>
      );
    });
  };

  const handleClick = () => {
    setIsExpended(!isExpended);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="rounded-xl bg-gray-100 w-full text-left font-extrabold box-border p-4 mb-3 focus:outline-none flex justify-between items-center"
      >
        <span>{section.title}</span>
        <ExpandMoreIcon className="text-gray-400 transform rotate-90" />
      </button>
      <div
        style={{
          height: `${height}px`,
        }}
        className="w-full flex flex-col transition-all duration-500 ease-in-out overflow-hidden"
      >
        <div ref={refDivCollapse} className="w-full h-auto flex flex-col">
          {renderClasses({ classes: section.classes })}
        </div>
      </div>
    </div>
  );
};

export default TemarySection;
