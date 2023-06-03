import React, { Component } from 'react';
import Item from './Item';
import '../assets/css/ItemGrid.css';
import Sidebar from './Sidebar';

class ItemGrid extends Component {

    mostrarItems = () => {
        const productos = this.props.productos;
        console.log(this.props.productos);
        const filtro = 'Productos';
        
        return (
            <React.Fragment>
                <Sidebar 
                filter={filtro}
                />
                <div className='item-grid'>
                    {productos.map( producto => (
                        <Item 
                            producto={producto}
                            key={productos.id}
                        />                
                    ) ) }
                </div>
            </React.Fragment>
        )

    }

    render() {
        return (
            <React.Fragment>
                { this.mostrarItems() }
            </React.Fragment>
        ); 
    }
}

export default ItemGrid;