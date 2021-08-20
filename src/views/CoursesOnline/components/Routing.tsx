import Link from '@Components/Links/Link';
import * as React from 'react';

interface Props {
  categoryName: string;
  subCategoryName: string;
  categorySlug: string;
  subCategorySlug: string;
}

const Routing: React.FC<Props> = ({
  categoryName,
  subCategoryName,
  categorySlug,
  subCategorySlug,
}) => {
  const className = 'hover:text-secondary-light';

  const renderRouting = () => {
    const items = [
      {
        name: 'Inicio',
        href: '/',
      },
      {
        name: 'Cursos online',
        href: '/courses-online',
      },
      {
        name: categoryName,
        href: `/courses-online/${categorySlug}`,
      },
      {
        name: subCategoryName,
        href: `/courses-online/${categorySlug}/${subCategorySlug}`,
      },
    ].filter(({ name }) => name !== undefined);

    return items.map(({ name, href }, index) => {
      if (items.length - 1 !== index) {
        return (
          <React.Fragment key={`${index}-${name}`}>
            <Link href={href} className={className}>
              {name}
            </Link>
            {` > `}
          </React.Fragment>
        );
      } else {
        //for the last element without href, only text
        return name;
      }
    });
  };

  return <div className="text-xs text-gray-400">{renderRouting()}</div>;
};

export default Routing;
