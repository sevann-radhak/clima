import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    // Crear los Refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();

        // Leer los refs y crear el objeto
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        // Enviar por props
        this.props.datosConculta(respuesta);

        // Limpiar el formulario
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input type="text" id="ciudad" ref={this.ciudadRef} />
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un país</option>
                                    <option value="AR" >Argentina</option>
                                    <option value="CO" >Colombia</option>
                                    <option value="CR" >Costa Rica</option>
                                    <option value="ES" >España</option>
                                    <option value="US" >Estados Unidos</option>
                                    <option value="MX" >México</option>
                                    <option value="PE" >Perú</option>
                                </select>
                                <label htmlFor="pais">País: </label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-2">
                                <input type="submit" value="Buscar"
                                    className="waves-effect waves-light btn-large yellow accent-4" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>);
    }
}

Formulario.propTypes = {
    datosConculta: PropTypes.func.isRequired
}

export default Formulario;