import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile Component', () => {
  test('Should render Profile with a Link button', async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Profile />
      </Router>
    );
    
    expect(screen.getByTestId('profileContainer')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.getByAltText('profilePhoto')).toBeInTheDocument();
    expect(screen.getByTestId('projectsList')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('returnButton')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    
  });

})