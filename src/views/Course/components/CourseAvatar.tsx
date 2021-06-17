import Image from 'next/image';

const CourseAvatar = () => {
  return (
    <div className="relative w-full h-50 sm:min-h-60 sm:h-60 xl:min-h-54 xl:h-54">
      <Image
        layout="fill"
        objectFit="cover"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
      />
    </div>
  );
};

export default CourseAvatar;
