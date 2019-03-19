import React, { Component } from 'react';
import { getCities } from '../services/cityService';
import CitiesTable from './citiesTable';

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
            <CitiesTable
                cities={cities}
                message={message}
            /> 
        );
    }
}
 
export default Cities;