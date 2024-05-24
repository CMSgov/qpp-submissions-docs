import { MemoryRouter,  } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './app';
import LeftNav from './left-nav';
import { combinedRoutes } from '../routes';

window.scroll = jest.fn();

describe('App tests', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  combinedRoutes.forEach((route) => {
    it(`LeftNav should have a link for ${route.path}`, () => {
      render(
        <MemoryRouter>
          <LeftNav />
        </MemoryRouter>,
      );

      expect(screen.getByRole('link', { name: route.linkText })).toHaveAttribute('href', route.path);
    });
  });

  combinedRoutes.forEach((route) => {
    it(`Clicking LeftNav link for ${route.path} should render component ${route.component.name}`, async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      await user.click(screen.getAllByRole('link', { name: route.linkText })[0]);
      const component = screen.getByTestId(route.component.name);
      expect(component).toBeInTheDocument();
      expect(screen.getByText('Last Updated:', {exact: false})).toBeInTheDocument();
    });
  });
});
