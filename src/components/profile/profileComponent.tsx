import React from 'react';
import VerticalTabs from './tabsComponent';
import '../profile/profile.scss'
export default class ProfileComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="tabs_block">
                    <VerticalTabs/>
                </div>
            </div>
        )
    }
}