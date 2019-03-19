import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';

class CitiesTable extends Component {
    columns = [
        {
          path: 'name',
          label: 'name',
          content: city => <Link to={`/cities/${city._id}`}>{city.name}</Link>
        }
    ];

    render() { 
        const { cities, message } = this.props;
        return ( 
            <Table 
                columns={this.columns}
                data={cities}
                message={message}    
            /> 
        );
    }
}
 
export default CitiesTable;