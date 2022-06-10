import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {




    console.log(saludo);



    return (
        <div>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </div>
    );
}

/**
 * Para pintar objetos podemos utilizar JSON.stringify(objeto)
 */


/**
 * Para crear un Fragment y que no se muestre la etiqueta div del contenedor padre,
 * se puede utilizar las etiquetas de apertura y cierre vacías <> </>, o la etiqueta <Fragment></Fragment>
 */


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mensaje por defecto'
}


export default PrimeraApp;
