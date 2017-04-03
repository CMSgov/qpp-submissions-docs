import React from 'react';

class DataModelRow extends React.Component {
  render() {
    return (
      <tr>
        <td><pre>{this.props.field.name}</pre></td>
        <td><pre>{this.props.field.value}</pre></td>
        <td dangerouslySetInnerHTML={{__html: this.props.field.description}} />
        <td>{this.props.field.notes}</td>
      </tr>
    );
  }
}

class DataModelTable extends React.Component {
  render() {
    var rows = [];
    this.props.fields.forEach(function(field) {
      rows.push(<DataModelRow field={field} key={field.name}/>);
    });
    return (
      <table className="ds-c-table ds-c-table--borderless ds-u-font-size--small">
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Value</th>
            <th>Description</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default DataModelTable;
