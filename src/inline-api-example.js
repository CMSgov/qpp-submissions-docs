import React from 'react';
import './inline-api-example.css';

const cssClass = "inline-api-example";

class InlineApiExample extends React.PureComponent {
  render() {
    return (
      <div className={cssClass}>
        <div className={cssClass + '-request'}>
          <span className={cssClass + '-request__verb'}>{this.props.verb}</span>
          <span className={cssClass + '-request__url'}>{this.props.url}</span>
        </div>
        <pre className={cssClass + '-body'}>
          {this.props.body}
        </pre>
      </div>
    );
  }
}

export default InlineApiExample;
