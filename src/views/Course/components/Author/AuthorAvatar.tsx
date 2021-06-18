import Image from 'next/image';

const AuthorAvatar = () => {
  return (
    <Image
      objectFit="cover"
      loader={({ src }) => `${src}`}
      src={'https://source.unsplash.com/random'}
      height={60}
      width={60}
      className=" rounded-circle overflow-hidden"
    />
  );
};

export default AuthorAvatar;
