import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from './app';
import { combinedRoutes } from '../routes';


test('should render without crashing', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
});

combinedRoutes.forEach(route => {
  test(`should have a link for ${route.path}`, () => {
    render(
      <Router>
        <App />
      </Router>,
    );
    const routeLink = screen.getAllByRole('link', { name: route.linkText })[0];
    expect(routeLink).toBeInTheDocument();
    expect(routeLink).toHaveAttribute('href', route.path);
  });
});
