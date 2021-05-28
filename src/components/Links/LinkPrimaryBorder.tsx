import Link from './Link';

interface Props {
  href: string;
  className?: string;
}

const LinkPrimaryBorder: React.FC<Props> = ({ href, className, children }) => {
  return (
    <Link
      className={`${
        className || 'py-2 px-4'
      } cursor-pointer box-border min-w-max border-2 font-extrabold text-base text-primary-light active:text-white dark:text-white rounded text-center border-primary-light dark:border-white hover:opacity-80 group-hover:opacity-80 dark:active:border-primary-light  active:bg-primary-light bg-transparent`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkPrimaryBorder;
