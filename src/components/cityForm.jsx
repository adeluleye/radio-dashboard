import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { saveCity, getCity } from '../services/cityService';

class CityForm extends Form {
    state = {
        data: { 
          name: '',
        },
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        name: Joi.string()
            .min(3)
            .max(255)
            .required()
            .label('Name')
    };

    async populateCity() {

        try {
          const cityId = this.props.match.params.id;
          if (cityId === "new") return;
    
          const { data: city } = await getCity(cityId);
          this.setState({ data: this.mapToViewModel(city) });
        } catch (ex) {
          if (ex.response && ex.response.status === 404) 
            return this.props.history.replace("/not-found");  
        }
    }

    async componentDidMount() {
        await this.populateCity();
    }


  mapToViewModel(city) {
    return {
      _id: city._id,
      name: city.name,
    };
  }

    doSubmit = async () => {
        // Call the server
        await saveCity(this.state.data);
    
        this.props.history.push('/cities');
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}
 
export default CityForm;