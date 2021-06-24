import { Categorie } from '@Types';
import Link from '@Components/Links/Link';

interface Props {
  categories: Categorie[];
  hoverSetSubCategories?: () => void;
}

const CategoriesList: React.FC<Props> = ({ categories }) => {
  const renderCategories = () => {
    return categories.map(({ name, url }) => {
      return (
        <Link href={url}>
          <div className="bg-gray-700"></div>
        </Link>
      );
    });
  };

  return <div></div>;
};

export default CategoriesList;
