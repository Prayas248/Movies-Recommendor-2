import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  integrity="sha384-vz3sn7H4hv8e59+KGoWF8TO1F4E5c9SM5+cA0cB2+xH7PZVXn7xglz2szv6j04F5"
  crossorigin="anonymous"
/>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <HashRouter>
    <App />

  </HashRouter>

);

