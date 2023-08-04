import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initialState, appReducers } from './reducers';
import { AppStateProvider } from './contexts/appState';

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
