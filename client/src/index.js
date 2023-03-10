import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './Context/appContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />

    </AppProvider>
  </React.StrictMode>
);


