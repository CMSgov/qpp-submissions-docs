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
        {this.props.body && <RequestBody body={this.props.body}/>}
      </div>
    );
  }
}

class RequestBody extends React.PureComponent {
  render() {
    return (
      <pre className={cssClass + '-body'}>
        {this.props.body}
      </pre>
    );
  }
}

export default InlineApiExample;
