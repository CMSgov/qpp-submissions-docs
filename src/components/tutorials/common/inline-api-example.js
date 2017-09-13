import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/tutorials/inline-api-example.css';

const cssClass = 'inline-api-example';

class InlineApiExample extends React.PureComponent {
  render() {
    return (
      <div className={cssClass}>
        <div className={cssClass + '-request'}>
          <span className={cssClass + '-request__verb'}><code>{this.props.verb}</code></span>
          <span className={cssClass + '-request__url'}><code>{this.props.url}</code></span>
        </div>
        {this.props.params && <table className={cssClass + '__params'}>{this.props.params}</table>}
      </div>
    );
  }
}

InlineApiExample.propTypes = {
  verb: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  params: PropTypes.element
};

export default InlineApiExample;
