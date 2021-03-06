import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  AVAILABLE_OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      availableOffersCount = {Setting.AVAILABLE_OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
