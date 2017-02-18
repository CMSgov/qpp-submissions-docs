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
        {this.props.params && <table className={cssClass + '__params'}>{this.props.params}</table>}
        {this.props.button && <div className={cssClass + '__button'}>{this.props.button}</div>}
      </div>
    );
  }
}

export default InlineApiExample;
