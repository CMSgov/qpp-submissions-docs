import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';
import { combinedRoutes } from '../routes';
import { StrictMode } from 'react';
import envConfig from '../../envConfig';


test('should render without crashing', () => {
  envConfig.baseUrl = '';
  render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

combinedRoutes.forEach(route => {
  test(`should have a link for ${route.path}`, () => {
    envConfig.baseUrl = '';
    render(
      <StrictMode>
        <App />
      </StrictMode>
      );
    const routeLink = screen.getAllByRole('link', { name: route.linkText, hidden: true })[0];
    expect(routeLink).toBeInTheDocument();
    expect(routeLink).toHaveAttribute('href', route.path);
  });
});
