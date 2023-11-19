import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { navigationSlice } from '../../store/reducers/NavigationSlice';

export function Search() {
  const dispatch = useAppDispatch();
  const { beer_name: searchTerm } = useAppSelector(
    (state) => state.navigationReducer
  );

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newSearchTerm = formData.get('search') as string;
    localStorage.setItem('searchTerm', newSearchTerm);
    dispatch(navigationSlice.actions.beer_nameChange(newSearchTerm.trim()));
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
