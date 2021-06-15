import StarRoundedIcon from '@material-ui/icons/StarRounded';

const Starts = () => {
  return (
    <div className="text-gray-800 min-w-max flex mx-2">
      <StarRoundedIcon
        style={{ fontSize: '22px' }}
        className="fill-current text-yellow-400 "
      />
      <p className="mx-1 font-extrabold text-base">
        4.87 <span className="font-normal text-gray-400">(1720)</span>
      </p>
    </div>
  );
};

export default Starts;
