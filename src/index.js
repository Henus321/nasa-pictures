import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { DateProvider } from './context/date/DateContext';
import { NasaProvider } from './context/nasa/NasaContext';
import { BookmarksProvider } from './context/bookmarks/BookmarksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DateProvider>
        <NasaProvider>
          <BookmarksProvider>
            <App />
          </BookmarksProvider>
        </NasaProvider>
      </DateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
