import React from 'react';
import TableHeader from './tableHeader';
import TableFoot from './tableFoot';
import TableBody from './tableBody';

const Table = ({ columns, data }) => {
    return ( 
        <React.Fragment>
            <h1 className="h3 mb-2 text-gray-800">Radios</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List of Radio Stations</h6>
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