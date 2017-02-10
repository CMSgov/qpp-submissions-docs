import React from 'react';
import './inline-api-example.css';

const cssClass = "inline-api-example";

const InlineApiExample = ({verb, url}) => (
  <div className={cssClass}>
    <div className={cssClass + '-request'}>
      <span className={cssClass + '-request__verb'}>{verb}</span>
      <span className={cssClass + '-request__url'}>{url}</span>
    </div>
  </div>
);

export default InlineApiExample;
