import { MemoryRouter } from 'react-router-dom';
import {render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';
import LeftNav from './left-nav';
import { combinedRoutes } from '../routes';
import envConfig from '../../envConfig';
import { ExternalLink } from '../../shared';

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

  it('should render link to http urls without link text provided', () => {
    const {getByText} = render(
      <ExternalLink href="http://sometest.com" />
    );
    const linkElement = getByText('sometest.com');
    expect(linkElement.getAttribute('href')).toContain('http://');
  })

  it('should render link to urls without a url type', () => {
    const {getByText} = render(
      <ExternalLink href="sometestnohttp.com" />
    );
    const linkElement = getByText('sometestnohttp.com');
    expect(linkElement.getAttribute('href')).toContain('sometestnohttp');
  })  

  combinedRoutes.forEach((route) => {
    it(`LeftNav should have a link for ${route.path}`, () => {
      const {getByRole} = render(
        <MemoryRouter>
          <LeftNav />
        </MemoryRouter>,
      );

      expect(getByRole('link', { name: route.linkText })).toHaveAttribute('href', route.path);
    });
  });

  combinedRoutes.forEach((route) => {
    it(`Clicking LeftNav link for ${route.path} should render component ${route.component.name}`, () => {
      const {getAllByRole, getByTestId, getByText } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      fireEvent.click(getAllByRole('link',{ name: route.linkText } )[0]);
      const component = getByTestId(route.component.name);
      expect(component).toBeInTheDocument();
      expect(getByText('Last Updated:', {exact: false})).toBeInTheDocument();
    });
  });

  describe('Subscribe Modal', () => {

    const modalText = 'To sign up for updates or to access your subscriber preferences, please enter your contact information below.';

    it("Opening the modal should reveal modal text", () => {
      const { getByRole, getByText, queryByText, getByTestId } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      expect(
        queryByText(
          modalText,
          { exact: true }
        )
      ).not.toBeInTheDocument();
      fireEvent.click(getByRole("link", { name: "Subscribe to Updates" }));
      expect(
        getByText(
          modalText,
          { exact: true }
        )
      ).toBeInTheDocument();
      fireEvent.click(getByTestId('close-button'));
      setTimeout(
        () =>
          expect(
            queryByText(
              modalText,
              { exact: true }
            )
          ).not.toBeInTheDocument(),
        500
      );
    });
  
    it("Using the cancel button should close the modal", () => {
      const { getByRole, queryByText, getByTestId } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      fireEvent.click(getByRole("link", { name: "Subscribe to Updates" }));
      fireEvent.click(getByTestId('cancel-button'));
      setTimeout(
        () =>
          expect(
            queryByText(
              modalText,
              { exact: true }
            )
          ).not.toBeInTheDocument(),
        500
      );
    });
  
    it("Using the onMouseEnter and onMouseLeave events should open and close modal respectively", () => {
      const { getByRole, getByText, queryByText, getByTestId } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      fireEvent.click(getByRole("link", { name: "Subscribe to Updates" }));
      fireEvent.mouseEnter(getByTestId('modal-toggle'));
      expect(
        getByText(
          modalText,
          { exact: true }
        )
      ).toBeInTheDocument();
      fireEvent.mouseLeave(getByTestId('modal-toggle'));
      setTimeout(
        () =>
          expect(
            queryByText(
              modalText,
              { exact: true }
            )
          ).not.toBeInTheDocument(),
        500
      );
    });
  });
});
