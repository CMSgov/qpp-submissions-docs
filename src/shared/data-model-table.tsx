import React from 'react';

import envConfig from '../envConfig';

export interface IDataModelTable {
  name: string;
  value: string;
  description: string;
  notes: string;
}

const checkTDforHTML = (val: string) =>
  envConfig.htmlRegex.test(val)
    ? <td dangerouslySetInnerHTML={{ __html: val }} />
    : <td>{val}</td>;

export const DataModelTable = ({ data }: { data: IDataModelTable[] }) => {
  return (
    <>
      <table className='ds-c-table ds-c-table--borderless ds-u-font-size--small'>
        <thead>
          <tr>
            {['Property Name: Type', 'Description', 'Notes'].map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data && data.map(({ name, value, description, notes }, i) =>
            <tr key={i}>
              <td><pre>{name}: {value}</pre></td>
              {checkTDforHTML(description)}
              {notes && checkTDforHTML(notes)}
            </tr>,
          )}
        </tbody>
      </table>
    </>
  );
};
