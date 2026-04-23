const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onSearch(e.target.value)}
      className="
        w-full 
        px-4 
        py-2 
        border 
        rounded-xl 
        shadow-sm 
        focus:outline-none 
        focus:ring-2 
        focus:ring-sky-400
      "
    />
  );
};

export default SearchBar;
