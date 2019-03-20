import React, { Component } from 'react';
import { getCities } from '../services/cityService';
import CitiesTable from './citiesTable';
import AddButton from './common/addButton';

class Cities extends Component {
    state = { 
        cities: [],
        message: ''
    }

    async componentDidMount() {
        
        const result = await getCities();
        const { ONLINE_RADIO: cities, message } = result.data;
        this.setState({ cities, message});
    }

    getPagedData = () => {
        const {
          cities,
          message
        } = this.state;

        return { data: cities, message };
    };

    render() { 
        const { data: cities, message } = this.getPagedData();
        return ( 
            <React.Fragment>
                <AddButton 
                    link='/cities/new'
                    value='Add City'
                />
                <CitiesTable
                    cities={cities}
                    message={message}
                />
            </React.Fragment>
        );
    }
}
 
export default Cities;