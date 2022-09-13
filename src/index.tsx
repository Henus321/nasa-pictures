import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { DateProvider } from './context/date/DateContext';
import { BookmarksProvider } from './context/bookmarks/BookmarksContext';
import { Provider } from 'react-redux';
import { setupStore } from './store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DateProvider>
          <BookmarksProvider>
            <App />
          </BookmarksProvider>
        </DateProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
