import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Router from './Router';
import userEvent from '@testing-library/user-event';

describe('Router Component', () => {
  test('Should render Honmepage', async () => {

    render(
        <Router />
    );
    
    expect(screen.getByTestId('homepageContainer')).toBeInTheDocument();
    
  });

  test('Should render Honmepage and navigate to Profile', async () => {

    render(
        <Router />
    );
    
    expect(screen.getByTestId('homepageContainer')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('enterbutton'));

    await waitFor(() => expect(screen.getByTestId('profileContainer')).toBeInTheDocument())
    
  });

})