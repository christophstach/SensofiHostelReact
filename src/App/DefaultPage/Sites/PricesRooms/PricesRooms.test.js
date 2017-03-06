import React from 'react';
import ReactDOM from 'react-dom';
import PricesRooms from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PricesRooms />, div);
});
