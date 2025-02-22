export const Input = ({ placeholder, value, onChange }) => (
    <input
      type="text"
      className="border p-2 rounded w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
  