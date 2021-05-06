import Link from 'next/link';

interface Props {
  text?: string;
  className?: string;
  href: string;
}

const MyLink: React.FC<Props> = ({ text, className, href, children }) => {
  return (
    <Link href={href}>
      <a className={className}>{children || text}</a>
    </Link>
  );
};

export default MyLink;
