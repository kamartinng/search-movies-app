interface SearchBoxType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBox = ({
  searchValue,
  setSearchValue,
}: SearchBoxType): JSX.Element => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="Type to search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
