import React, { Component } from 'react';
import RadiosTable from './radiosTable';
import { getRadios } from '../services/radioService';

class Radios extends Component {
    state = { 
        radios: []
    }

    async componentDidMount() {
        
        const result = await getRadios();
        const { ONLINE_RADIO: radios } = result.data;
        // console.log(radios);
        this.setState({ radios: radios});
    }

    getPagedData = () => {
        const {
          radios: radios
        } = this.state;

        return { data: radios };
    };

    render() { 
        const { data: radios } = this.getPagedData();
        return ( 
            <RadiosTable
                radios={radios}
            /> 
        );
    }
}
 
export default Radios;