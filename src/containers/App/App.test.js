import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('Should render App in homepage', () => {
    expect(render(<App />)).toMatchSnapshot();  
  
  });

})
