import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { StateProvider } from './Context/StateProvider';
import { initialState } from './Context/InitalState';
import  reducer  from './Context/Reducer';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
);

