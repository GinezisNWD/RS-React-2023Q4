import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navigationReducer from './reducers/NavigationSlice';
import productsReducer from './reducers/ProductsSlice';
import { productsApi } from '../services/ProductService';

const rootReducers = combineReducers({
  navigationReducer,
  productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore['dispatch'];
