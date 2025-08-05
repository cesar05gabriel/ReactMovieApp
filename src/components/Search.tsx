import type { Dispatch, SetStateAction } from "react";

const Search = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
