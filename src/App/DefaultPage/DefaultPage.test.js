import React from 'react';
import ReactDOM from 'react-dom';
import DefaultPage from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultPage />, div);
});
