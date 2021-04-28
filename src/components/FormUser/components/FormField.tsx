import { useRef, useEffect } from 'react';

interface PropsFormField {
  name: string;
  textLabel: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const FormField: React.FC<PropsFormField> = ({
  name,
  textLabel,
  value,
  onChange,
  errorMessage,
}) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (errorMessage) {
      inputRef.current.classList.remove(
        'caret-primary',
        'border-gray-800',
        'focus:border-purple-400'
      );
      inputRef.current.classList.add(
        'caret-red',
        'border-red-500',
        'focus:border-red-500'
      );
    } else {
      inputRef.current.classList.remove(
        'caret-red',
        'border-red-500',
        'focus:border-red-500'
      );
      inputRef.current.classList.add(
        'caret-primary',
        'border-gray-800',
        'focus:border-purple-400'
      );
    }
  }, [errorMessage]);

  return (
    <div className="flex flex-col min-h-22 h-auto mb-3">
      <label className="text-white font-semibold mb-1">{textLabel}</label>
      <input
        ref={inputRef}
        name={name}
        type={name}
        value={value}
        onChange={onChange}
        className="border border-gray-800 bg-gray-700 box-border font-semibold focus:border-purple-400 p-3 text-white rounded h-14 outline-none caret-primary"
      />
      {errorMessage ? (
        <span className="text-red-500 font-semibold text-xs my-2">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default FormField;
