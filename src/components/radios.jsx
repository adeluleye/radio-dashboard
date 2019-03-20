import React, { Component } from 'react';
import RadiosTable from './radiosTable';
import { getRadios } from '../services/radioService';
import AddButton from './common/addButton';

class Radios extends Component {
    state = { 
        radios: [],
        message: ''
    }

    async componentDidMount() {
        
        const result = await getRadios();
        const { ONLINE_RADIO: radios, message } = result.data;
        // console.log(radios);
        this.setState({ radios: radios, message});
    }

    getPagedData = () => {
        const {
          radios: radios,
          message: message
        } = this.state;

        return { data: radios, message };
    };

    render() { 
        const { data: radios, message } = this.getPagedData();
        return ( 
            <React.Fragment>
                <AddButton 
                    link='/radios/new'
                    value='Add Radio Station'
                />
                <RadiosTable
                    radios={radios}
                    message={message}
                /> 
            </React.Fragment>
        );
    }
}
 
export default Radios;