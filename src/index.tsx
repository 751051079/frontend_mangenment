import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/assets/css/GlobalButton.css'
import '@/assets/css/GlobalMarginPadding.css'
import '@/assets/css/GlobalFontSize.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
