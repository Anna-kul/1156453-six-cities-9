import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  AVAILABLE_OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      availableOffersCount = {Setting.AVAILABLE_OFFERS_COUNT}
      offers = {offers}
      review = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
