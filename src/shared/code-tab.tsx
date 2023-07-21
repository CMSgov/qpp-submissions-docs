import React, { useState } from 'react';

import envConfig from '../envConfig';

import '../styles/shared/code-tab.scss';

import { CopyBlock } from 'react-code-blocks';
import { customCodeTheme } from './custom-code-theme';

export interface ICodeTab {
  tab: string;
  code: string;
  response?: string;
}

const showLineNumbers = false;
const codeBlock = true;

// If the code block contains HTML, do not implement CopyBlock
const checkPreForHTML = (code: string) =>
  envConfig.htmlRegex.test(code) ? (
    <pre
      dangerouslySetInnerHTML={{ __html: code }}
      style={{
        fontFamily: 'Menlo,Monaco,Consolas,"Courier New",monospace',
        fontSize: '0.9rem',
        background: 'white',
        color: 'black',
      }}
    />
  ) : (
    <CopyBlock
      text={code}
      language={'typescript'}
      {...{ showLineNumbers, codeBlock }}
      theme={customCodeTheme}
      customStyle={{
        fontFamily: 'Menlo,Monaco,Consolas,"Courier New",monospace',
        fontSize: '0.9rem',
      }}
      copied={true}
      wrapLongLines={true}
      onCopy={()=>{ return; }}
    />
  );

export const CodeTab = ({ data }: { data: ICodeTab[] }) => {
  const [selectedTab, setSelectedTab] = useState(data[0].tab);

  return (
    <div id='code-tabs'>

      {data.map(({ tab }, i) =>
        <button
          key={i}
          className={`${selectedTab === tab ? 'selected' : ''} tab-button`}
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
