import React from 'react';
import { Link } from 'react-router-dom';

const AppSettings = () => {
    return ( 
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <table className="table" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Employer</th>
                        <th>Awards</th>
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
 
export default AppSettings;