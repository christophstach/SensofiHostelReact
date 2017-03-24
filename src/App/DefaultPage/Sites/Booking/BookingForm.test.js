import React from 'react';
import ReactDOM from 'react-dom';
import BookingForm from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookingForm />, div);
});