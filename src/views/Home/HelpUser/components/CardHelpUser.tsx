import Image from 'next/image';

import LinkPrimary from '@Components/Links/LinkPrimary';

interface Props {
  LinkHref: string;
  LinkText: string;
  text: string;
  src: string;
}

const CardHelpUser: React.FC<Props> = ({ LinkHref, LinkText, text, src }) => {
  return (
    <div className="border border-gray-200 dark:border-transparent shadow-md bg-white dark:bg-base-light-dark-mode box-border p-3 rounded-md overflow-hidden w-full h-full flex">
      <Image
        layout="fixed"
        loader={({ src }) => `${src}`}
        src={src}
        width="96"
        height="96"
      />
      <div className="flex-grow px-3 flex flex-col justify-between">
        <p>{text}</p>
        <LinkPrimary href={LinkHref} className="py-1 px-4">
          {LinkText}
        </LinkPrimary>
      </div>
    </div>
  );
};

export default CardHelpUser;
