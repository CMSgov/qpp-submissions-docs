import React from 'react';
import PropTypes from 'prop-types';

class DataModelRow extends React.Component {
  render() {
    return (
      <tr>
        <td><pre>{this.props.field.find}</pre></td>
        <td><pre>{this.props.field.xpath}</pre></td>
        <td><pre>{this.props.field.jsonpath}</pre></td>
        <td><pre>{this.props.field.value}</pre></td>
      </tr>
    );
  }
}

const DataModelFieldPropType = PropTypes.shape({
  find: PropTypes.string.isRequired,
  xpath: PropTypes.string.isRequired,
  jsonpath: PropTypes.string.isRequired,
  value: PropTypes.string
}).isRequired;

DataModelRow.propTypes = DataModelFieldPropType.isRequired;

class ScoringNavigationTable extends React.Component {
  render() {
    const rows = [];
    this.props.fields.forEach(function(field) {
      rows.push(<DataModelRow field={field} key={field.find} />);
    });
    return (
      <div>
        <table className='ds-c-table ds-c-table--borderless ds-u-font-size--small'>
          <thead>
            <tr>
              <th>Find</th>
              <th>XPath</th>
              <th>JSONPath</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

ScoringNavigationTable.propTypes = {
  fields: PropTypes.arrayOf(DataModelFieldPropType).isRequired
};

export default ScoringNavigationTable;
