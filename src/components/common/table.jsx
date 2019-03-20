import React from 'react';
import TableHeader from './tableHeader';
import TableFoot from './tableFoot';
import TableBody from './tableBody';

const Table = ({ columns, data, message }) => {
    // console.log(message);
    return (        
        <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List of {message}</h6>
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
    );
}
 
export default Table;