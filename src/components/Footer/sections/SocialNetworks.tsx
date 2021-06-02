import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@Components/Icons/FacebookIcon';

const SocialNetworks = () => {
  return (
    <div className="text-gray-400 w-44 flex justify-between items-center py-4">
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <YouTubeIcon />
    </div>
  );
};

export default SocialNetworks;
