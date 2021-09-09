import { Prices as TypePrice } from '@Types/course';
interface Props {
  prices: TypePrice;
}

const Price: React.FC<Props> = ({ prices }) => {
  return (
    <div className="flex items-center my-4">
      <span className="text-red-main font-extrabold text-lg">
        {`${prices.currencySymbol}${prices.realPrice}`}
      </span>
      <span className="line-through text-gray-500 font-light text-sm mx-3 align-top">
        {`${prices.currencySymbol}${prices.realPrice}`}
      </span>
    </div>
  );
};

export default Price;
