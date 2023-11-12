import { createContext } from 'react';
// import { iProduct } from '../components/Product/Product';

export interface IAppContext {
  // isAppLoading: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  // products: iProduct[];
  // setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
}

export const AppContext = createContext<null | IAppContext>(null);
