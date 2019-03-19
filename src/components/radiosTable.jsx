import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';

class RadiosTable extends Component {
    columns = [
        {
          path: 'name',
          label: 'name',
          content: radio => <Link to={`/radios/${radio._id}`}>{radio.name}</Link>
        },
        { path: 'city.name', label: 'City' },
        { path: 'url', label: 'Url' },
        { path: 'frequency', label: 'Frequency' }
    ];

    render() { 
        const { radios, message } = this.props;
        return ( 
            <Table 
                columns={this.columns}
                data={radios} 
                message={message}   
            /> 
        );
    }
}
 
export default RadiosTable;