type SearchBarProps = {
    value: string;
    onChange: (val: string) => void;
  };
  
  const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg px-3 py-2 w-64"
      />
    );
  };
  
  export default SearchBar;
  