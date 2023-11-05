import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
