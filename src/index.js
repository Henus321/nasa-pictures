import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { DateProvider } from './context/date/DateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DateProvider>
        <App />
      </DateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
