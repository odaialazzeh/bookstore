import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/BOOKS';
import Categories from './pages/CATEGORIES';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
