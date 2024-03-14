/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa6';

const SearchBar = ({ onSubmit }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Please enter search query');
    }
    onSubmit(query);
    setQuery('');
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
        value={query}
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
