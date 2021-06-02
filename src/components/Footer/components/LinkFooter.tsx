import Link from '@Components/Links/Link';

interface Props {
  href: string;
}

const LinkFooter: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-sm font-bold text-gray-500 hover:text-secondary-main  mb-3"
    >
      {children}
    </Link>
  );
};

export default LinkFooter;
