import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import Link from '@Components/Links/Link';

const HoverSeeTrailer = () => {
  return (
    <div className="absolute h-full w-full z-2 bg-base-main bg-opacity-70 opacity-0 hover:opacity-100  transition-all duration-200 ease-in  flex items-center justify-center">
      <Link href="/home" className="flex items-center">
        <VisibilityOutlinedIcon className="fill-current text-white" />
        <span className="font-bold text-base mx-2 text-white">Ver trailer</span>
      </Link>
    </div>
  );
};

export default HoverSeeTrailer;
