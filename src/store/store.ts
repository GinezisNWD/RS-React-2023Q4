import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductsSlice';

const rootReducers = combineReducers({
  productsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore['dispatch'];
