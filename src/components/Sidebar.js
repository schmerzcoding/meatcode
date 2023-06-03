import React, { Component } from 'react';
import '../assets/css/Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
                <div className='sidebar'>
                <ul className='list'>
                    <li className='list-item'>
                        Todos
                    </li>
                    <li className='list-item'>
                        Productos
                    </li>
                    <li className='list-item'>
                        Recetas
                    </li>
                    <li className='list-item'>
                        Consejos
                    </li>
                </ul>
                </div>
        ); 
    }
}

export default Sidebar;