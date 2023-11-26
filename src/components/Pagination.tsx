import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Pagination.module.css';

export function Pagination() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(325 / 25);

  useEffect(() => {
    const page = router.query.page;
    if (page && typeof page === 'string') {
      console.log(router.query.page);
      setCurrentPage(Number(page));
    }
  }, [router.query.page]);

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
        className={styles.container}
      >
        <button
          onClick={() => {
            setCurrentPage(1);
            router.push(`/products/1`);
          }}
          style={{
            pointerEvents: currentPage <= 1 ? 'none' : 'auto',
            color: currentPage <= 1 ? 'gray' : '#646cff',
          }}
        >
          first
        </button>
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            router.push(`/products/${currentPage - 1}`);
          }}
          style={{
            pointerEvents: currentPage <= 1 ? 'none' : 'auto',
            color: currentPage <= 1 ? 'gray' : '#646cff',
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            router.push(`/products/${currentPage + 1}`);
          }}
          style={{
            pointerEvents: currentPage >= 13 ? 'none' : 'auto',
            color: currentPage >= 13 ? 'gray' : '#646cff',
          }}
        >
          next
        </button>
        <button
          onClick={() => {
            setCurrentPage(maxPage);
            router.push(`/products/${maxPage}`);
          }}
          style={{
            pointerEvents: currentPage >= maxPage ? 'none' : 'auto',
            color: currentPage >= maxPage ? 'gray' : '#646cff',
          }}
        >
          last
        </button>
      </div>
    </div>
  );
}

export default Pagination;
