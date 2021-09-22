import React from 'react';

const Equipo = ({ equipo, eliminarEquipo }) => {

    const { nombre, apellido,tipo, codigo, fecha, hora, detalleequipo } = equipo

    return ( 
        <div className="tarea">
            <p>Nombre: <span>{nombre}</span></p>
            <p>Apellido: <span>{apellido}</span></p>
            <p>Tipo de equipanto: <span>{tipo}</span></p>
            <p>Codigo del equipamento: <span>{codigo}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Detalle del equipo: <span>{detalleequipo}</span></p>

            <button 
            className="button eliminar u-full-width"
            onClick={ () => eliminarEquipo(equipo.id)}
            >
                Eliminar Equipo &times;
            </button>

        </div>
     );
}
 
export default Equipo;