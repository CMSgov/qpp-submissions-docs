import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';
import { combinedRoutes } from '../routes';
import { StrictMode } from 'react';
import envConfig from '../../envConfig';
import userEvent from '@testing-library/user-event';


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
    const routeLink = screen.getAllByRole('link', { name: route.linkText })[0];
    expect(routeLink).toBeInTheDocument();
    expect(routeLink).toHaveAttribute('href', route.path);
  });
});

combinedRoutes.forEach((route) => {
  it(`Clicking LeftNav link for ${route.path} should render component ${route.component.name}`, async () => {
    const user = userEvent.setup();
    render(
      <StrictMode>
        <App />
      </StrictMode>,
    );

    await user.click(screen.getByRole('link', { name: route.linkText }));
    const component = screen.getByTestId(route.component.name);
    expect(component).toBeInTheDocument();
    expect(screen.getByText('Last Updated:', {exact: false})).toBeInTheDocument();
  });
});
