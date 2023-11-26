import { useState, useEffect } from 'react';
import styles from '../styles/Search.module.css';
import { useRouter } from 'next/router';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    const tern = localStorage.getItem('searchTerm') ?? '';
    setSearchTerm(tern);
  }, []);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem('searchTerm', searchTerm);
    if (searchTerm.length === 0) {
      router.push('/products');
      return;
    }
    router.push(`/search/${searchTerm}`);
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          defaultValue={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
