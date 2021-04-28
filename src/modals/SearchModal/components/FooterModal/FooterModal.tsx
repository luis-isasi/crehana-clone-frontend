import BtnToPremium from '../Buttons/BtnToPremium';
import FooterText from './FooterText';

const FooterModal: React.FC = () => {
  return (
    <div className="bg-primary-primary h-20 min-h-20 w-full box-border px-5 text-white font-bold flex items-center">
      <FooterText />
      <BtnToPremium />
    </div>
  );
};

export default FooterModal;
