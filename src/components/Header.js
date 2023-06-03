import React, { Component } from 'react';
import headerbg from '../assets/images/header-bg.svg';
import logo from '../assets/images/logo.svg';
import rrss from '../assets/images/social-media.svg';
import brush from '../assets/images/brush.svg';
import '../assets/css/Header.css';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='header-text'>
                    <img src={rrss} className='rrss' alt='rrss'/>
                    <img src={logo} className='logo' alt='rrss'/>
                    <p className='title'>El secreto de tu cocina</p>
                    <img src={brush} className='brush' alt='brush' />
                </div>
                <img src={headerbg} alt='header' className='bg'/>      
            </React.Fragment>
        );
    }
}

export default Header; 