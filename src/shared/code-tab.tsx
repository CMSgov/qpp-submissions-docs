import React, { useState } from 'react';

import envConfig from '../envConfig';

import '../styles/shared/code-tab.scss';

export interface ICodeTab {
  tab: string;
  code: string;
  response?: string;
}

const checkPreForHTML = (code: string) =>
  envConfig.htmlRegex.test(code)
    ? <pre dangerouslySetInnerHTML={{ __html: code }} />
    : <pre>{code}</pre>;

export const CodeTab = ({ data }: { data: ICodeTab[] }) => {
  const [selectedTab, setSelectedTab] = useState(data[0].tab);

  return (
    <div id='request-response-code-tabs'>

      {data.map(({ tab }, i) =>
        <button
          key={i}
          className={`${selectedTab === tab ? 'selected' : ''}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>,
      )}

      {data.map(({ tab, code, response }, i) =>
        <div
          key={i}
          className={`code-section ${selectedTab === tab ? 'show' : 'hide'}`}
        >
          {response &&
            <>
              <p>{tab} code:</p>
              <pre>{response}</pre>
            </>
          }

          <p>{tab} body:</p>
          {checkPreForHTML(code)}
        </div>,
      )}

    </div>
  );
};
