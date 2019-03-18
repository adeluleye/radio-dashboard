import React, { Component } from 'react';

class TableFoot extends Component {
    render() {
        return ( 
            <tfoot>
                <tr>
                    {this.props.columns.map(column => (
                    <th
                        key={column.path || column.key}
                    >
                        {column.label}
                    </th>
                    ))}
                </tr>
            </tfoot> 
        );
    }
}
 
export default TableFoot;