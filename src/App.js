import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import ItemGrid from './components/ItemGrid';
import Form from './components/Form'

class App extends Component {

  state = {
    productos : [],
    filtro : 'Productos'
  }

  consultarApi = () => {
    const url = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${this.state.filtro}`;

    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({ productos : resultado }) )
    
  }

  componentDidMount(){
    this.consultarApi();
  }
  
  render() {
    return (
        <React.Fragment>
          <Header />
          <Content />
          <ItemGrid 
            productos = {this.state.productos}
          />
          <Form />
        </React.Fragment>
    );
  }
}
export default App;
