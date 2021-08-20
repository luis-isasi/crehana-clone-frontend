import Link from 'next/link';

interface Props {
  text?: string;
  className?: string;
  href: string;
  onClick?: () => void;
}

const MyLink: React.FC<Props> = ({
  text,
  className,
  href,
  children,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a className={className} onClick={onClick}>
        {children || text}
      </a>
    </Link>
  );
};

export default MyLink;
