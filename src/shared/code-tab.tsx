import React, { useState } from 'react';

import '../styles/shared/code-tab.scss';

import { CopyBlock } from 'react-code-blocks';
import { customCodeTheme } from './custom-code-theme';

export interface ICodeTab {
  tab: string;
  code: string;
  response?: string;
}

export const CodeTab = ({ data }: { data: ICodeTab[] }) => {
  const showLineNumbers = false;
  const codeBlock = true;
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
          <CopyBlock
            text={code}
            language={"typescript"}
            {...{ showLineNumbers, codeBlock }}
            theme={customCodeTheme}
            customStyle={{
              fontFamily: 'Menlo,Monaco,Consolas,"Courier New",monospace',
              fontSize: "0.9rem",
            }}
          />
        </div>
      )}

    </div>
  );
};
