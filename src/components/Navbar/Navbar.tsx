import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { navigationSlice } from '../../store/reducers/NavigationSlice';

export function Navbar() {
  const dispatch = useAppDispatch();
  const { page: currentPage } = useAppSelector(
    (state) => state.navigationReducer
  );

  const setCurrentPage = (pageNumber: number) => {
    dispatch(navigationSlice.actions.pageChange(pageNumber));
  };

  const params = useParams();

  useEffect(() => {
    if (params.page !== undefined) {
      const newCurrentPage = Number(params.page.split('=')[1]);
      setCurrentPage(newCurrentPage);
    }
  }, []);

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
          to={`/products/page=${1}`}
          style={{
            pointerEvents: currentPage <= 1 ? 'none' : 'auto',
            color: currentPage <= 1 ? 'gray' : '#646cff',
          }}
        >
          first
        </Link>
        <Link
          onClick={() => setCurrentPage(currentPage - 1)}
          to={`/products/page=${currentPage - 1}`}
          style={{
            pointerEvents: currentPage <= 1 ? 'none' : 'auto',
            color: currentPage <= 1 ? 'gray' : '#646cff',
          }}
        >
          prev
        </Link>
        <Link
          onClick={() => setCurrentPage(currentPage + 1)}
          to={`/products/page=${currentPage + 1}`}
          style={{
            pointerEvents: currentPage >= 13 ? 'none' : 'auto',
            color: currentPage >= 13 ? 'gray' : '#646cff',
          }}
        >
          next
        </Link>
        <Link
          onClick={() => setCurrentPage(13)}
          to={`/products/page=${13}`}
          style={{
            pointerEvents: currentPage >= 13 ? 'none' : 'auto',
            color: currentPage >= 13 ? 'gray' : '#646cff',
          }}
        >
          last
        </Link>
      </div>
    </div>
  );
}
