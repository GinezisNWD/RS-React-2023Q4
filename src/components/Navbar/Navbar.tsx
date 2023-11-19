import { useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { navigationSlice } from '../../store/reducers/NavigationSlice';

export function Navbar() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { page: currentPage, per_page } = useAppSelector(
    (state) => state.navigationReducer
  );
  const maxPage = Math.ceil(325 / per_page);

  const setCurrentPage = useCallback(
    (pageNumber: number) => {
      dispatch(navigationSlice.actions.pageChange(pageNumber));
    },
    [dispatch]
  );

  useEffect(() => {
    const newCurrentPage = Number(searchParams.get('page'));
    const validPage = newCurrentPage < 1 ? currentPage : newCurrentPage;
    setCurrentPage(validPage);
    const newPerPage = Number(searchParams.get('per-page'));
    const validPerPage = newPerPage < 1 ? per_page : newPerPage;
    dispatch(navigationSlice.actions.per_pageChange(validPerPage));
  }, [searchParams, setCurrentPage, dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        margin: '0 0 40px 0',
      }}
      className="navbar"
    >
      <div className="menu" style={{ display: 'flex' }}>
        <Link to={'/products'}>Products</Link>
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
        className="pagination"
      >
        <Link
          onClick={() => setCurrentPage(1)}
          to={`/?page=${1}&per-page=${per_page}`}
          style={{
            pointerEvents: currentPage <= 1 ? 'none' : 'auto',
            color: currentPage <= 1 ? 'gray' : '#646cff',
          }}
        >
          first
        </Link>
        <Link
          onClick={() => setCurrentPage(currentPage - 1)}
          to={`/?page=${currentPage - 1}&per-page=${per_page}`}
          style={{
            pointerEvents: currentPage <= 1 ? 'none' : 'auto',
            color: currentPage <= 1 ? 'gray' : '#646cff',
          }}
        >
          prev
        </Link>
        <Link
          onClick={() => setCurrentPage(currentPage + 1)}
          to={`/?page=${currentPage + 1}&per-page=${per_page}`}
          style={{
            pointerEvents: currentPage >= 13 ? 'none' : 'auto',
            color: currentPage >= 13 ? 'gray' : '#646cff',
          }}
        >
          next
        </Link>
        <Link
          onClick={() => setCurrentPage(maxPage)}
          to={`/?page=${maxPage}&per-page=${per_page}`}
          style={{
            pointerEvents: currentPage >= maxPage ? 'none' : 'auto',
            color: currentPage >= maxPage ? 'gray' : '#646cff',
          }}
        >
          last
        </Link>
      </div>
    </div>
  );
}
