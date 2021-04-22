import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from 'components/Icons/CloseIcon';

interface Props {
  placeHolder?: string;
}

const Search: React.FC<Props> = ({ placeHolder }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setValue(value);
  };

  return (
    <div className="bg-white text-gray-400 w-full h-10 flex items-center px-0 lg:px-5">
      <SearchIcon style={{ margin: '8px' }} />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={
          placeHolder || 'Encuentra cursos, certificaciones y profesores'
        }
        className="outline-none text-gray-700 font-semibold text-base lg:text-2xl w-full h-full caret-primary"
      />
      {value && (
        <button
          className="bg-gray-400 rounded-circle outline-none focus:outline-none"
          onClick={() => {
            setValue('');
          }}
        >
          <CloseIcon className="fill-current text-white w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Search;
