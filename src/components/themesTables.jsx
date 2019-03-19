import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';

class ThemesTable extends Component {
    columns = [
        {
          path: 'name',
          label: 'name',
          content: theme => <Link to={`/themes/${theme._id}`}>{theme.name}</Link>
        },
        {
            path: 'color1',
            label: 'color1'
        },
        {
            path: 'color2',
            label: 'color2'
        },
    ];

    render() { 
        const { themes, message } = this.props;
        return ( 
            <Table 
                columns={this.columns}
                data={themes}
                message={message}    
            /> 
        );
    }
}
 
export default ThemesTable;