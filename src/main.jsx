import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GitProvider } from './Context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitProvider>
    <App />
    </GitProvider>
  </React.StrictMode>
)
