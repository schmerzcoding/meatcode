import React, { Component } from 'react';
import '../assets/css/Content.css';

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='content'>
                    <p className='articulos'>Nuestros Articulos</p> 
                </div>
            </React.Fragment>
        ); 
    }
}

export default Content;