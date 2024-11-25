import { IconSearch } from "@tabler/icons-react"; // Example icon, replace as needed

const SearchButton = () => {
  return (
    <div className="relative inline-block group">
      {/* Button */}
      <button className="flex items-center bg-[#e2b760] text-white rounded-full p-3 hover:bg-yellow-600 transition duration-700">
        <IconSearch color="white" size={20} />
      </button>
      {/* Hidden Text */}
      <span className="absolute top-1/2 left-full ml-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 text-sm font-medium bg-white px-2 py-1 rounded shadow-lg">
        Search
      </span>
    </div>
  );
};

export default SearchButton;
