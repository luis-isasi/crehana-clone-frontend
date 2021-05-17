import BtnToPremium from '@Components/buttons/BtnToPremium';
import BannerToPremiumText from './BannerToPremiumText';

interface Props {
  text?: string;
  linkText?: string;
}

const BannerToPremium: React.FC<Props> = ({ text, linkText }) => {
  return (
    <div className="bg-primary-primary h-20 min-h-20 w-full box-border px-5 text-white font-bold flex items-center animate-appear-upward">
      <BannerToPremiumText>{text}</BannerToPremiumText>
      <BtnToPremium>{linkText}</BtnToPremium>
    </div>
  );
};

export default BannerToPremium;
