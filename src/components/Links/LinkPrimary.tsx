import Link from '@Components/Links/Link';

interface Props {
  href: string;
  classPadding?: string;
}

const LinkPrimary: React.FC<Props> = ({ href, classPadding, children }) => {
  return (
    <Link
      className={`${
        classPadding || 'py-2 px-4'
      } cursor-pointer border-2 font-extrabold text-base rounded text-center border-white hover:opacity-80 group-hover:opacity-80 active:border-primary-light  active:bg-primary-light bg-transparent w-full box-border `}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkPrimary;
