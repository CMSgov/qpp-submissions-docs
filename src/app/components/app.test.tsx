import { MemoryRouter } from 'react-router';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';
import LeftNav from './left-nav';
import { combinedRoutes } from '../routes';
import { ExternalLink, LinkToId } from '../../shared';
import { ApiExample, IApiExample } from '../../shared/api-example';
import { CodeTab, ICodeTab } from '../../shared/code-tab';
import NotFound from './notFound/not-found';

describe('App tests', () => {
  beforeAll(() => {
    // Mock window.scroll which is not implemented in JSDOM
    Object.defineProperty(window, "scroll", {
      value: jest.fn(),
      writable: true,
    });

    // Also mock scrollTo in case it's used
    Object.defineProperty(window, "scrollTo", {
      value: jest.fn(),
      writable: true,
    });
  });
  
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

  it('should render external links properly with http urls and no protocol suffix', () => {
      const renderAndCheckHref = (url: string, elementText: string, hrefContains: string) => {
        const {getByText} = render(
          <ExternalLink href={url} />
        );
        const linkElement = getByText(elementText);
        expect(linkElement.getAttribute('href')).toContain(hrefContains);
      };

      renderAndCheckHref('http://sometest.com', 'sometest.com', 'http://');
      renderAndCheckHref('sometestnohttp.com', 'sometestnohttp.com', 'sometestnohttp.com');
  });

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

  describe('LinkToId Component', () => {

    beforeEach(() => {
      // Mock window.scrollBy since it's not implemented in jsdom
      window.scrollBy = jest.fn();
      // Mock scrollIntoView
      Element.prototype.scrollIntoView = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render a link with correct href when to prop does not include hash', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <LinkToId to="section1" text="Go to Section 1" />
        </MemoryRouter>
      );
      
      const link = getByRole('link', { name: 'Go to Section 1' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/section1#section1');
    });

    it('should render a link with correct href when to prop includes hash', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <LinkToId to="page#section2" text="Go to Section 2" />
        </MemoryRouter>
      );
      
      const link = getByRole('link', { name: 'Go to Section 2' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/page#section2');
    });

    it('should apply custom attributes when attrs prop is provided', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <LinkToId 
            to="section3" 
            text="Custom Link"
          />
        </MemoryRouter>
      );
      
      const link = getByRole('link', { name: 'Custom Link' });
      expect(link).toBeInTheDocument();
    });

    it('should use custom offset when provided', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <LinkToId to="section4" text="Custom Offset Link" offset="50" />
        </MemoryRouter>
      );
      
      const link = getByRole('link', { name: 'Custom Offset Link' });
      expect(link).toBeInTheDocument();
      
      // Simulate clicking the link to test scroll behavior
      fireEvent.click(link);
      
      // The component should call scrollIntoView and then scrollBy with the custom offset
      setTimeout(() => {
        expect(window.scrollBy).toHaveBeenCalledWith({ top: -50, behavior: 'smooth' });
      }, 0);
    });

    it('should use default offset of 1 when offset is not provided', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <LinkToId to="section5" text="Default Offset Link" />
        </MemoryRouter>
      );
      
      const link = getByRole('link', { name: 'Default Offset Link' });
      expect(link).toBeInTheDocument();
      
      // Simulate clicking the link to test scroll behavior
      fireEvent.click(link);
      
      // The component should call scrollIntoView and then scrollBy with default offset
      setTimeout(() => {
        expect(window.scrollBy).toHaveBeenCalledWith({ top: -1, behavior: 'smooth' });
      }, 0);
    });
  });

  describe('ApiExample Component', () => {

    it('should render basic API example with verb and URL', () => {
      const apiData: IApiExample = {
        verb: 'GET',
        url: '/api/submissions'
      };

      const { getByText } = render(<ApiExample data={apiData} />);
      
      expect(getByText('GET')).toBeInTheDocument();
      expect(getByText('/api/submissions')).toBeInTheDocument();
    });

    it('should render API example with table rows', () => {
      const apiData: IApiExample = {
        verb: 'POST',
        url: '/api/submissions',
        rows: [
          {
            row: ['Parameter', 'Type', 'Description'],
            classes: ['header-class', 'type-class', 'desc-class']
          },
          {
            row: ['submissionId', 'string', 'Unique identifier for submission']
          }
        ]
      };

      const { getByText, getByRole } = render(<ApiExample data={apiData} />);
      
      expect(getByText('POST')).toBeInTheDocument();
      expect(getByText('/api/submissions')).toBeInTheDocument();
      expect(getByRole('table')).toBeInTheDocument();
      expect(getByText('Parameter')).toBeInTheDocument();
      expect(getByText('Type')).toBeInTheDocument();
      expect(getByText('Description')).toBeInTheDocument();
      expect(getByText('submissionId')).toBeInTheDocument();
      expect(getByText('string')).toBeInTheDocument();
      expect(getByText('Unique identifier for submission')).toBeInTheDocument();
    });

    it('should apply CSS classes to table cells when provided', () => {
      const apiData: IApiExample = {
        verb: 'PUT',
        url: '/api/submissions/123',
        rows: [
          {
            row: ['Field', 'Value'],
            classes: ['field-class', 'value-class']
          }
        ]
      };

      const { container } = render(<ApiExample data={apiData} />);
      
      const cells = container.querySelectorAll('td');
      expect(cells[0]).toHaveClass('field-class');
      expect(cells[1]).toHaveClass('value-class');
    });

    it('should render HTML content using dangerouslySetInnerHTML when HTML is detected', () => {
      const apiData: IApiExample = {
        verb: 'DELETE',
        url: '/api/submissions/456',
        rows: [
          {
            row: ['Status', '<strong>Success</strong>']
          }
        ]
      };

      const { getByText, container } = render(<ApiExample data={apiData} />);
      
      expect(getByText('Status')).toBeInTheDocument();
      // Check that the HTML was rendered as actual HTML, not as text
      const strongElement = container.querySelector('strong');
      expect(strongElement).toBeInTheDocument();
      expect(strongElement).toHaveTextContent('Success');
    });

    it('should render plain text when no HTML is detected', () => {
      const apiData: IApiExample = {
        verb: 'PATCH',
        url: '/api/submissions/789',
        rows: [
          {
            row: ['Message', 'Plain text message']
          }
        ]
      };

      const { getByText, container } = render(<ApiExample data={apiData} />);
      
      expect(getByText('Message')).toBeInTheDocument();
      expect(getByText('Plain text message')).toBeInTheDocument();
      // Ensure no HTML tags were created
      expect(container.querySelector('strong')).not.toBeInTheDocument();
    });

    it('should not render table when rows are not provided', () => {
      const apiData: IApiExample = {
        verb: 'OPTIONS',
        url: '/api/health'
      };

      const { queryByRole } = render(<ApiExample data={apiData} />);
      
      expect(queryByRole('table')).not.toBeInTheDocument();
    });

    it('should render empty table when rows array is empty', () => {
      const apiData: IApiExample = {
        verb: 'HEAD',
        url: '/api/status',
        rows: []
      };

      const { getByRole, container } = render(<ApiExample data={apiData} />);
      
      expect(getByRole('table')).toBeInTheDocument();
      expect(container.querySelectorAll('tr')).toHaveLength(0);
    });

    it('should handle mixed HTML and plain text in the same row', () => {
      const apiData: IApiExample = {
        verb: 'GET',
        url: '/api/mixed',
        rows: [
          {
            row: ['Plain text', '<em>Emphasized text</em>', 'More plain text']
          }
        ]
      };

      const { getByText, container } = render(<ApiExample data={apiData} />);
      
      expect(getByText('Plain text')).toBeInTheDocument();
      expect(getByText('More plain text')).toBeInTheDocument();
      
      const emElement = container.querySelector('em');
      expect(emElement).toBeInTheDocument();
      expect(emElement).toHaveTextContent('Emphasized text');
    });

    it('should handle multiple rows with different class configurations', () => {
      const apiData: IApiExample = {
        verb: 'POST',
        url: '/api/complex',
        rows: [
          {
            row: ['Header 1', 'Header 2'],
            classes: ['header-1', 'header-2']
          },
          {
            row: ['Data 1', 'Data 2']
            // No classes for this row
          },
          {
            row: ['Footer 1', 'Footer 2'],
            classes: ['footer-1'] // Only one class for two cells
          }
        ]
      };

      const { container } = render(<ApiExample data={apiData} />);
      
      const rows = container.querySelectorAll('tr');
      expect(rows).toHaveLength(3);
      
      // First row with classes
      const firstRowCells = rows[0].querySelectorAll('td');
      expect(firstRowCells[0]).toHaveClass('header-1');
      expect(firstRowCells[1]).toHaveClass('header-2');
      
      // Second row without classes
      const secondRowCells = rows[1].querySelectorAll('td');
      expect(secondRowCells[0]).not.toHaveClass();
      expect(secondRowCells[1]).not.toHaveClass();
      
      // Third row with partial classes
      const thirdRowCells = rows[2].querySelectorAll('td');
      expect(thirdRowCells[0]).toHaveClass('footer-1');
      expect(thirdRowCells[1]).not.toHaveClass();
    });

    it('should render with proper structure and IDs', () => {
      const apiData: IApiExample = {
        verb: 'GET',
        url: '/api/test'
      };

      const { container } = render(<ApiExample data={apiData} />);
      
      const apiExampleDiv = container.querySelector('#api-example');
      expect(apiExampleDiv).toBeInTheDocument();
      
      const verbSpan = container.querySelector('.verb');
      const urlSpan = container.querySelector('.url');
      
      expect(verbSpan).toBeInTheDocument();
      expect(urlSpan).toBeInTheDocument();
      
      const codeElements = container.querySelectorAll('code');
      expect(codeElements).toHaveLength(2);
      expect(codeElements[0]).toHaveTextContent('GET');
      expect(codeElements[1]).toHaveTextContent('/api/test');
    });
  });

  describe('CodeTab Component', () => {

    it('should render code tabs with default first tab selected', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'JavaScript',
          code: 'console.log("Hello World");'
        },
        {
          tab: 'Python',
          code: 'print("Hello World")'
        }
      ];

      const { getByText, getByRole } = render(<CodeTab data={codeData} />);
      
      expect(getByText('JavaScript')).toBeInTheDocument();
      expect(getByText('Python')).toBeInTheDocument();
      
      // First tab should be selected by default
      const jsButton = getByRole('button', { name: 'JavaScript' });
      const pyButton = getByRole('button', { name: 'Python' });
      
      expect(jsButton).toHaveClass('selected');
      expect(jsButton).toHaveClass('tab-button');
      expect(pyButton).toHaveClass('tab-button');
      expect(pyButton).not.toHaveClass('selected');
    });

    it('should switch tabs when tab buttons are clicked', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'JavaScript',
          code: 'console.log("Hello World");'
        },
        {
          tab: 'Python',
          code: 'print("Hello World")'
        },
        {
          tab: 'Java',
          code: 'System.out.println("Hello World");'
        }
      ];

      const { getByRole } = render(<CodeTab data={codeData} />);
      
      const jsButton = getByRole('button', { name: 'JavaScript' });
      const pyButton = getByRole('button', { name: 'Python' });
      const javaButton = getByRole('button', { name: 'Java' });
      
      // Initially JavaScript should be selected
      expect(jsButton).toHaveClass('selected');
      expect(pyButton).not.toHaveClass('selected');
      expect(javaButton).not.toHaveClass('selected');
      
      // Click Python tab
      fireEvent.click(pyButton);
      expect(jsButton).not.toHaveClass('selected');
      expect(pyButton).toHaveClass('selected');
      expect(javaButton).not.toHaveClass('selected');
      
      // Click Java tab
      fireEvent.click(javaButton);
      expect(jsButton).not.toHaveClass('selected');
      expect(pyButton).not.toHaveClass('selected');
      expect(javaButton).toHaveClass('selected');
    });

    it('should display response section when response is provided', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'Request',
          code: 'GET /api/data',
          response: '200 OK'
        },
        {
          tab: 'Response',
          code: '{"status": "success", "data": []}'
        }
      ];

      const { getByText, queryByText, getByRole } = render(<CodeTab data={codeData} />);
      
      // Initially should show Request tab with response
      expect(getByText('Request code:')).toBeInTheDocument();
      expect(getByText('200 OK')).toBeInTheDocument();
      expect(getByText('Request body:')).toBeInTheDocument();
      
      // Switch to Response tab (no response field)
      fireEvent.click(getByRole('button', { name: 'Response' }));
      expect(queryByText('Response code:')).not.toBeInTheDocument();
      expect(getByText('Response body:')).toBeInTheDocument();
    });

    it('should render HTML content using dangerouslySetInnerHTML when HTML is detected', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'HTML',
          code: '<div class="example"><strong>Bold text</strong></div>'
        }
      ];

      const { container, getByText } = render(<CodeTab data={codeData} />);
      
      expect(getByText('HTML body:')).toBeInTheDocument();
      
      // Check that the HTML was rendered as actual HTML elements
      const strongElement = container.querySelector('strong');
      expect(strongElement).toBeInTheDocument();
      expect(strongElement).toHaveTextContent('Bold text');
      
      const divElement = container.querySelector('div.example');
      expect(divElement).toBeInTheDocument();
    });

    it('should handle single tab data', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'Only Tab',
          code: 'const single = "only option";',
          response: 'Single response'
        }
      ];

      const { getByText, getByRole } = render(<CodeTab data={codeData} />);
      
      const button = getByRole('button', { name: 'Only Tab' });
      expect(button).toHaveClass('selected');
      expect(button).toHaveClass('tab-button');
      
      expect(getByText('Only Tab code:')).toBeInTheDocument();
      expect(getByText('Single response')).toBeInTheDocument();
      expect(getByText('Only Tab body:')).toBeInTheDocument();
    });

    it('should handle mixed HTML and non-HTML tabs', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'Plain Code',
          code: 'function hello() { return "world"; }'
        },
        {
          tab: 'HTML Code',
          code: '<span>Hello <em>World</em></span>'
        }
      ];

      const { container, getByRole } = render(<CodeTab data={codeData} />);
      
      // Initially on Plain Code tab - should use CopyBlock
      const codeElements = container.querySelectorAll('pre');
      expect(codeElements.length).toBeGreaterThan(0);
      
      // Switch to HTML tab - should use dangerouslySetInnerHTML
      fireEvent.click(getByRole('button', { name: 'HTML Code' }));
      
      const spanElement = container.querySelector('span');
      const emElement = container.querySelector('em');
      expect(spanElement).toBeInTheDocument();
      expect(emElement).toBeInTheDocument();
      expect(emElement).toHaveTextContent('World');
    });

    it('should maintain proper CSS classes for show/hide states', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'Tab 1',
          code: 'code1'
        },
        {
          tab: 'Tab 2',
          code: 'code2'
        }
      ];

      const { container, getByRole } = render(<CodeTab data={codeData} />);
      
      const codeSections = container.querySelectorAll('.code-section');
      expect(codeSections).toHaveLength(2);
      
      // Initially first tab should be shown
      expect(codeSections[0]).toHaveClass('show');
      expect(codeSections[1]).toHaveClass('hide');
      
      // Switch to second tab
      fireEvent.click(getByRole('button', { name: 'Tab 2' }));
      
      expect(codeSections[0]).toHaveClass('hide');
      expect(codeSections[1]).toHaveClass('show');
    });

    it('should render with proper component structure and ID', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'Test',
          code: 'test code'
        }
      ];

      const { container } = render(<CodeTab data={codeData} />);
      
      const codeTabsDiv = container.querySelector('#code-tabs');
      expect(codeTabsDiv).toBeInTheDocument();
      
      const tabButtons = container.querySelectorAll('.tab-button');
      expect(tabButtons).toHaveLength(1);
      
      const codeSections = container.querySelectorAll('.code-section');
      expect(codeSections).toHaveLength(1);
    });

    it('should handle empty code gracefully', () => {
      const codeData: ICodeTab[] = [
        {
          tab: 'Empty',
          code: ''
        }
      ];

      const { getByText, getByRole } = render(<CodeTab data={codeData} />);
      
      const button = getByRole('button', { name: 'Empty' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('selected');
      
      expect(getByText('Empty body:')).toBeInTheDocument();
    });
  });

  describe('NotFound Component', () => {

    beforeEach(() => {
      // Mock window.scrollBy since it's not implemented in jsdom
      window.scrollBy = jest.fn();
      // Mock scrollIntoView
      Element.prototype.scrollIntoView = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render the page not found heading', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      );
      
      const heading = getByRole('heading', { name: 'Page Not Found' });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('ds-text-heading--2xl');
      expect(heading).toHaveAttribute('id', 'help');
    });

    it('should render a link back to the homepage', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      );
      
      const homepageLink = getByRole('link', { name: 'homepage' });
      expect(homepageLink).toBeInTheDocument();
      expect(homepageLink).toHaveAttribute('href', '/#/');
    });


    it('should have proper styling on the heading', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      );
      
      const heading = getByRole('heading', { name: 'Page Not Found' });
      expect(heading).toHaveStyle('margin-top: 0');
    });
  });
});
