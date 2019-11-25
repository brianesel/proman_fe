import React, { Component } from 'react';
import '../../../../css/landing/aboutme.scss'
import avatar from '../../../../css/images/download.png'
import unicorn from './unicorn.png'

export default class AboutMe extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
        }
    }

    render() {
        return (
            <div className="about_me_container">
                <div className="background_wave">
                    <div className="waves"></div>
                </div>
                <div className="about_me_wrapper">
                    <div className="about_me_content">
                        <div className="about_me_avatar">
                            <img alt="my avatar" src={avatar} className="about_me_img"/>
                            <div className="unicorn_container">
                                <div className="box bounce">
                                    <img className="unicorn_me" atl="just me unicorn" src={unicorn}/>
                                </div>
                            </div>
                        </div>
                        <div className="headers about_me_headers">       
                            <a href="https://www.linkedin.com/in/trung-nguyen-huu-hai-a0a111184/" className="name">Nguyen Huu Hai Trung</a>
                            <a href="https://www.linkedin.com/in/trung-nguyen-huu-hai-a0a111184/" className="meaning"> The Centre of the Ocean</a>
                        </div>
                        <p className="icon">______ <i className="fa fa-rainbow"/> ______</p>
                        <p className="about_self_title">Freelance web developer</p>
                    </div>
                </div>
            </div>
        )
    }
}