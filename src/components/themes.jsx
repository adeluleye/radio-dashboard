import React, { Component } from 'react';
import { getThemes } from '../services/themeService';
import ThemesTable from './themesTables';

class Themes extends Component {
    state = { 
        themes: [],
        message: ''
    }

    async componentDidMount() {
        
        const result = await getThemes();
        const { ONLINE_RADIO: themes, message } = result.data;
        this.setState({ themes, message});
    }

    getPagedData = () => {
        const {
          themes,
          message
        } = this.state;

        return { data: themes, message };
    };

    render() { 
        const { data: themes, message } = this.getPagedData();
        return ( 
            <ThemesTable
                themes={themes}
                message={message}
            /> 
        );
    }
}
 
export default Themes;