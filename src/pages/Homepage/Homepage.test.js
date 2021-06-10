import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import HomePage from './Homepage';

describe('Homepage Component', () => {
  test('Should render Homepage with a Link button', async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <HomePage />
      </Router>
    );
    
    expect(screen.getByTestId('homepageContainer')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('enterbutton')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    
  });

})