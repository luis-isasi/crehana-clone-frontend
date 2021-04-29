import Image from 'next/image';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const Recomendations = () => {
  return (
    <div className="bg-blue-600">
      <h2>Nuevos cursos, nuevos retos</h2>
      <div className="relative min-w-px min-h-px h-88 w-100 rounded-md overflow-hidden">
        <Image
          layout="responsive"
          loader={({ src }) => `${src}`}
          src={'https://source.unsplash.com/random'}
          width={480}
          height={352}
        />
      </div>
      <div className="flex items-center">
        <ArrowBackIosRoundedIcon />
        01/12
        <ArrowBackIosRoundedIcon className="transform rotate-180" />
      </div>
    </div>
  );
};

export default Recomendations;
