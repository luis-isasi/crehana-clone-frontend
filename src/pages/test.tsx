import useDarkMode from '@Hooks/useDarkMode';

const Test = () => {
  const { theme, changeTheme } = useDarkMode();

  // className="bg-gray-500 dark:bg-gray-900 h-98 w-72 mx-auto  transition-colors  duration-500 ease-in "
  return (
    <>
      <div>
        <button
          onClick={() => {
            changeTheme();
          }}
        >
          {theme}
        </button>
      </div>
    </>
  );
};

export default Test;
