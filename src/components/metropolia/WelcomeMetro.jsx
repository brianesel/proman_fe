import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const welcomepageWrapperStyle = {
        height: '100%',
        width: '100%',
        minWidth: '700px',
        position: 'absolute',
        bottom: '0',
        left: '0',
        display: 'block',
        opacity: '0.8',
        backgroundColor: 'white',
        zIndex: '1'
    }

const welcomeTextWrapperStyle = {
        position: 'absolute',
        left: '48.5%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '850px',
        maxHeight: '350px',
        width: '100%',
        zIndex: '100',
        textDecoration: 'none'
    }

const metropoliaLogo = {
    width: '100%'
}

const upperTextStyle = {
    position: 'absolute',
    left: '50%',
    top: '38%',
    transform: 'translate(-50%,-50%)',
    fontSize: '150px',
    fontWeight: '900',
    color: '#bf1d58'
}

const textWelcomeStyle = {
    position: 'absolute',
    display: 'inline-block',
    left: '51.5%',
    top: '40%',
    transform: 'translate(-50%,-50%)',
    fontSize: '150px',
    fontWeight: '900',
    color: '#bf1d58'
}

class WelcomeMetro extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
        }
    }

    render() {
        return (
            <div className="welcomePage_wrapper" style={welcomepageWrapperStyle}>
                <Link to="/metropolia/idea/list" style={welcomeTextWrapperStyle}>
                    <img style={metropoliaLogo} src="https://upload.wikimedia.org/wikipedia/fi/thumb/6/61/Metropolia_Ammattikorkeakoulu_logo.svg/1024px-Metropolia_Ammattikorkeakoulu_logo.svg.png"/>
                </Link>
            </div>
        )
    }
}

export default WelcomeMetro
