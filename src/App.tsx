import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Navbar } from './components/Navbar/Navbar';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRouter />
    </BrowserRouter>
  );
}
