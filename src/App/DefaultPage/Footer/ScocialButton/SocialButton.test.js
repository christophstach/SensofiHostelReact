import React from 'react';
import ReactDOM from 'react-dom';
import SocialButton from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialButton type="facebook" />, div);
});
