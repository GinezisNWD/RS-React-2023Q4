import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, IAppContext } from '../../context/App';

export function Search() {
  const { searchTerm, setSearchTerm } = useContext(AppContext) as IAppContext;

  const navigate = useNavigate();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newSearchTerm = formData.get('search') as string;
    setSearchTerm(newSearchTerm.trim());
    localStorage.setItem('searchTerm', newSearchTerm);

    if (newSearchTerm !== '') {
      navigate(`/beer_name=${newSearchTerm}`);
    } else if (newSearchTerm === '') {
      navigate(`/`);
    }
  }
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue={searchTerm} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
