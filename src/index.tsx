import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
const redirectUri = "http://localhost:3000/";

const auth0ProviderOptions = {
    domain,
    clientId,
    authorizationParams: {
        redirect_uri: redirectUri,
    },
} as any;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Auth0Provider {...auth0ProviderOptions}>
            <App />
        </Auth0Provider>
    </React.StrictMode>
);

reportWebVitals();
