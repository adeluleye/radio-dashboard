import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { saveSetting, getSettings } from '../services/settingService';

class AppSettings extends Form {
    state = { 
        data: { 
            app_name: '', 
            app_fb_url: '',
            app_twitter_url: '',
            app_version: '',
            app_author: '',
            app_contact: '',
            app_email: '',
            app_website_url: '',
            app_description: '',
            app_developed_by: '',
        },
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        app_name: Joi.string()
            .required()
            .label('Name'), 
        app_fb_url: Joi.string()
            .required()
            .label('Facebook URL'),
        app_twitter_url: Joi.string()
            .required()
            .label('Twitter URL'),
        app_version: Joi.string()
            .label('App Version'),
        app_author: Joi.string()
            .label('Author'),
        app_contact: Joi.string()
            .min(5)
            .max(50)
            .label('Contact'),
        app_email: Joi.string()
            .min(5)
            .max(255)
            .email()
            .label('Email'),
        app_website_url: Joi.string()
            .label('Website'),
        app_description: Joi.string()
            .label('App Description'),
        app_developed_by: Joi.string()
            .label('Developed By'),

    };

    async populateSetting() {

        const result = await getSettings();
        const { ONLINE_RADIO: setting } = result.data;
        console.log(setting[0]);
        this.setState({ data: this.mapToViewModel(setting[0]) });
        
    }

    async componentDidMount() {
        await this.populateSetting();
    }

    mapToViewModel(setting) {
        return {
          _id: setting._id,
          app_name: setting.app_name,
          app_fb_url: setting.app_fb_url,
          app_twitter_url: setting.app_twitter_url,
          app_version: setting.app_version,
          app_author: setting.app_author,
          app_contact: setting.app_contact,
          app_email: setting.app_email,
          app_website_url: setting.app_website_url,
          app_description: setting.app_description,
          app_developed_by: setting.app_developed_by,
        };
    }

    doSubmit = async () => {
        // Call the server
        await saveSetting(this.state.data);
        window.location = '/settings';
    }

    render() { 
        return ( 
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('app_name', 'App Name')}
                    {this.renderInput('app_fb_url', 'Facebook URL')}
                    {this.renderInput('app_twitter_url', 'Twitter URL')}
                    {this.renderInput('app_version', 'App Version')}
                    {this.renderInput('app_author', 'Author')}
                    {this.renderInput('app_contact', 'Contact')}
                    {this.renderInput('app_email', 'Email')}
                    {this.renderInput('app_website_url', 'Website')}
                    {this.renderInput('app_description', 'Description')}
                    {this.renderInput('app_developed_by', 'Developed By')}
                    {this.renderButton('Save')}
                </form>
            </div> 
        );
    }
}
 
export default AppSettings;