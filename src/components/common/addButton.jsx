import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ value, link}) => {
    return ( 
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-2 text-gray-800"></h1>
            <Link to={link} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-plus fa-sm text-white-50"></i> {value}</Link>
        </div> 
    );
}
 
export default AddButton;