import { Category } from '@Types/course';
import OptionsFilterMobile from '../../components/OptionsFilterMobile';

const LayoutMobile: React.FC<{ categories: Category[] }> = ({
  children,
  categories,
}) => {
  return (
    <div className="w-full h-auto">
      <OptionsFilterMobile categories={categories} />
      <div className="w-full h-auto box-border px-5 mx-auto">
        <div className="py-5">{children}</div>
      </div>
    </div>
  );
};

export default LayoutMobile;
