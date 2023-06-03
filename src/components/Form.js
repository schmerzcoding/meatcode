import React, { Component } from 'react';
import '../assets/css/Form.css';

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='formulario'>
                    <p className='contacto'>Contactanos</p>
                    <form className='form-body my-5'>
                        <div className='form-group row form-input'>
                        <input type='text' className='form-control form-control-lg col-md-3' placeholder='NOMBRE'/>
                        <input type='text' className='form-control form-control-lg col-md-3 mx-5' placeholder='APELLIDO'/>
                        </div>
                        <div className='form-group row form-input'>
                        <input type='text' className='form-control form-control-lg col-md-3' placeholder='MAIL'/>
                        <input type='number' className='form-control form-control-lg col-md-3 mx-5' placeholder='TELEFONO'/>
                        </div>
                        <input type='submit' value='ENVIAR' className='btn' />
                    </form>
                </div>
            </React.Fragment>
        ); 
    }
}

export default Form;