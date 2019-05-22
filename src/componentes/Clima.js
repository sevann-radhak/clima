import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
    mostrarResutlado = () => {
        // Obtener los datos de la consulta 
        const { name, weather, main } = this.props.resultado;

        if (!name || !weather || !main) {
            return (null);
        }

        const kelvin = 273.15;
        const iconURL = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `Clima de ${name}`;

        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offst-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura">
                                Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                            <img src={iconURL} alt={alt} />
                            </p>
                            <p>Mínima: {(main.temp_min - kelvin).toFixed(2)} &deg;C</p>
                            <p>Máxima: {(main.temp_max - kelvin).toFixed(2)} &deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        
        return (
            <div className="container">
                {this.mostrarResutlado()}
            </div>
        );
    }
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;