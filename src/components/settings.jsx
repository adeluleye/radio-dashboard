import React from 'react';
import NavTab from './common/navTab';
import AppSettings from './appSettings';
import ApiSettings from './apiSettings';
import PrivacyPolicy from './privacyPolicy';

const Settings = () => {
    return ( 
        <section id="tabs" className="project-tab">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <NavTab />
                        <div className="tab-content" id="nav-tabContent">
                            <AppSettings />
                            <ApiSettings />
                            <PrivacyPolicy />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}
 
export default Settings;