import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Auth0Provider domain='dev-yxo2-l0e.us.auth0.com' clientId='rIFnFB2tMEv6YUfCuIJJvpg2hpStSIDX' redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

