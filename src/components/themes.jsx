import React, { Component } from 'react';
import { getThemes } from '../services/themeService';
import ThemesTable from './themesTables';
import AddButton from './common/addButton';

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
            <React.Fragment>
                <AddButton 
                    link='/themes/new'
                    value='Add Theme'
                />
                <ThemesTable
                    themes={themes}
                    message={message}
                />
            </React.Fragment>
        );
    }
}
 
export default Themes;