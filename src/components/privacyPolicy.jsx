import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return ( 
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <table className="table" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Contest Name</th>
                        <th>Date</th>
                        <th>Award Position</th>
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
 
export default PrivacyPolicy;