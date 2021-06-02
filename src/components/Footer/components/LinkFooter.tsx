import Link from '@Components/Links/Link';

interface Props {
  href: string;
}

const LinkFooter: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-sm text-gray-600 hover:text-secondary-main font-medium mb-3"
    >
      {children}
    </Link>
  );
};

export default LinkFooter;
