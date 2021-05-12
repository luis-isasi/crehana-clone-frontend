import StarRoundedIcon from '@material-ui/icons/StarRounded';

import PeopleIcon from '@Components/Icons/PeopleIcon';

const SalesAndStars: React.FC = () => {
  return (
    <div className="mb-3 mt-6 lg:mt-10 xl:mt-10  flex items-center">
      <span className="flex items-center mr-2">
        <PeopleIcon />
        <span className="mx-2 font-light text-gray-800">544</span>
      </span>
      <span className="flex items-center">
        <StarRoundedIcon
          className="fill-current text-yellow-400 text-3xl"
          style={{ fontSize: 30 }}
        />
        <span className="mx-2 font-light text-gray-800">4.89</span>
      </span>
    </div>
  );
};

export default SalesAndStars;
