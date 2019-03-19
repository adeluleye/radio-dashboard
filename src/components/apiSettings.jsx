import React from 'react';
import { Link } from 'react-router-dom';

const ApiSettings = () => {
    return ( 
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <table className="table" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Employer</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="#">Work 1</Link></td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default ApiSettings;