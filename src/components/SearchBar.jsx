/* eslint-disable react/prop-types */
import { FaSistrix } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleInputChange = (e) => {
    if (e.target.value === '') {
      setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-stretch min-w-[600px]  rounded overflow-hidden bg-white"
    >
      <button
        type="submit"
        className="inline-flex items-center justify-center size-10 text-sm rounded-l-sm  bg-slate-100 opacity-60 transition-opacity duration-300 hover:opacity-100"
      >
        <FaSistrix className="fill-slate-700 size-5 " />
      </button>

      <input
        value={query || ''}
        onChange={handleInputChange}
        className="flex w-full text-base border-none outline-none px-1 "
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
};

export default SearchBar;
