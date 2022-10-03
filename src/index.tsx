import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogEntry from './components/BlogEntry';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/sergio_portfolio' element={<App />}/>
      <Route path='/sergio_portfolio/Blog' element={<Blog />}/>
      <Route path='/sergio_portfolio/Blog/:title' element={<BlogEntry />} />
    </Routes>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
