import AuthorAvatar from './AuthorAvatar';

const Author = () => {
  return (
    <div className="w-46 max-w-46 h-auto mt-3 mb-6 flex flex-col">
      <span className="py-2">creado por:</span>
      <div className="flex justify-between items-center">
        <AuthorAvatar />
        <div className="ml-2 flex flex-col items-start text-base">
          <span className="font-bold text-gray-800">Eva Klobuznik</span>
          <span className="max-w-max">Digital Manager</span>
        </div>
      </div>
    </div>
  );
};

export default Author;
