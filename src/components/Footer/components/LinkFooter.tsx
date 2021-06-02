import Link from '@Components/Links/Link';

interface Props {
  href: string;
}

const LinkFooter: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-sm font-bold text-gray-500 dark:text-base-lighter hover:text-secondary-main dark:hover:text-secondary-main transition-colors duration-150 ease-out mb-3"
    >
      {children}
    </Link>
  );
};

export default LinkFooter;
