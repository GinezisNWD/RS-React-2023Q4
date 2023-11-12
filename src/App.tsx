import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';
import { AppContext } from './context/App';

export function App() {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );
  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppContext.Provider>
  );
}
