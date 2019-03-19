import React from 'react';
import { Link } from 'react-router-dom';
import TableHeader from './tableHeader';
import TableFoot from './tableFoot';
import TableBody from './tableBody';

const Table = ({ columns, data, message }) => {
    console.log(message);
    return ( 
        <React.Fragment>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">{message}</h1>
                <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-plus fa-sm text-white-50"></i> Add { message }</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List of Radio {message}</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <TableHeader columns={columns} />
                            <TableFoot columns={columns} />
                            <TableBody columns={columns} data={data} />
                        </table> 
                    </div>
                </div>
            </div>
    
        </React.Fragment>

    );
}
 
export default Table;