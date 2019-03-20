import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getTheme, saveTheme } from '../services/themeService';
import 'jscolor-picker/jscolor';

class ThemeForm extends Form {
    state = {
        data: { 
          name: '',
          color1: '',
          color2: ''
        },
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        name: Joi.string()
            .min(3)
            .max(255)
            .required()
            .label('Name'),
        color1: Joi.string()
            .min(7)
            .max(7)
            .required()
            .label('Color1'),
        color2: Joi.string()
            .min(7)
            .max(7)
            .required()
            .label('Color2')
    };

    async populateTheme() {

        try {
          const themeId = this.props.match.params.id;
          if (themeId === "new") return;
    
          const { data: theme } = await getTheme(themeId);
          this.setState({ data: this.mapToViewModel(theme) });
        } catch (ex) {
          if (ex.response && ex.response.status === 404) 
            return this.props.history.replace("/not-found");  
        }
    }

    async componentDidMount() {
        await this.populateTheme();
    }


    mapToViewModel(theme) {
        return {
        _id: theme._id,
        name: theme.name,
        color1: theme.color1,
        color2: theme.color2,
        };
    }

    doSubmit = async () => {
        // Call the server
        await saveTheme(this.state.data);
        
        window.location = '/themes'
        //this.props.history.push('/themes');
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name')}
                    {this.renderInput('color1', 'Color1', 'form-control jscolor')}
                    {this.renderInput('color2', 'Color2', 'form-control jscolor')}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}
 
export default ThemeForm;