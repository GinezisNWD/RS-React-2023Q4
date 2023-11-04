interface SearchProps {
  onSumbmit: (event: React.FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
}

export function Search({ onSumbmit, searchTerm }: SearchProps) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={onSumbmit}>
        <input type="text" name="search" defaultValue={searchTerm} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
