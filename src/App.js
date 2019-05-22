import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {
  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidMount() {
    this.setState({ error: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.consulta !== this.state.consulta) {
      this.consultaApi();
    }
  }

  consultaApi = () => {
    const { ciudad, pais } = this.state.consulta;

    if (!ciudad || !pais) return null;

    // Leer la url y agregar el api key
    const appId = '5a9cb32ee3d65acbcf21c9919316fa76';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    // console.log(url);

    // query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({ resultado: datos });
      })
      .catch(error => {
        console.log(error)
      })
  }

  datosConculta = (respuesta) => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({ error: true });
    }
    else {
      this.setState({
        consulta: respuesta,
        error: false
      });
    }
  }

  render() {
    const { error } = this.state,
      { cod } = this.state.resultado;
    let resultado;

    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    }
    else if(cod === "404"){
      resultado = <Error mensaje="Resultado no encontrado" />
    }
    else {
      resultado = <Clima resultado={this.state.resultado} />
    }

    return (
      <div className="app">
        <Header
          titulo="Clima React" />
        <Formulario
          datosConculta={this.datosConculta} />
        {resultado}
      </div>
    );
  }
}

export default App;
