import React from 'react';
import TableHeader from './tableHeader';
import TableFoot from './tableFoot';

const Table = () => {
    return ( 
        <React.Fragment>
            <h1 class="h3 mb-2 text-gray-800">Radios</h1>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">List of Radio Stations</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <TableHeader />
                            <TableFoot />
                        </table> 
                    </div>
                </div>
            </div>
    
        </React.Fragment>

    );
}
 
export default Table;