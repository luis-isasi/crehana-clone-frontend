interface PropsFormField {
  name: string;
  textLabel: string;
  value: string;
}

const FormField: React.FC<PropsFormField> = ({ name, textLabel, value }) => {
  return (
    <div className="flex flex-col h-22 mb-3">
      <label className="text-white font-semibold mb-1">{textLabel}</label>
      <input
        name={name}
        value={value}
        className="border border-gray-800 bg-gray-700 box-border p-3 text-white rounded h-14  outline-none focus:border-purple-400 caret-color"
      />
    </div>
  );
};

export default FormField;
