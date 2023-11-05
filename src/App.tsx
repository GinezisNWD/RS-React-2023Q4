import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';

export function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', gap: '20px' }} className="navbar">
        <Link to={'/products'}>Пиво</Link>
        <Link to={'/test'}>Тестовая</Link>
      </div>

      <AppRouter />
    </BrowserRouter>
  );
}
