// import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
// import { AppContext } from './context/App';

const store = setupStore();

export function App() {
  // const [searchTerm, setSearchTerm] = useState<string>(
  //   localStorage.getItem('searchTerm') || ''
  // );
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}
