import React, { Component } from 'react';
import '../../../../css/landing/aboutapp.scss';

export default class AboutTheApp extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            
        }
        
    }

    render() {
        return (
            <div className="AboutApp_container">
                <div className="AboutApp_wrapper">
                    <div className="AboutApp_content">
                        <p className="header">About The Application</p>
                        <div className="body_icon"><i className="fa fa-rainbow"/></div>
                        <div className="body row">
                            <div className="first_col col-6">
                                Profile and idea management app.
                            </div>
                            <div className="second_col col-6">
                                Share your ideas, find your partners and colleagues.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}