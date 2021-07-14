import React from 'react';

const Tarea = ({ tarea, eliminarTarea }) => {

    const { nombre, apellido, fecha, hora, realizartarea } = tarea

    return ( 
        <div className="tarea">
            <p>Nombre: <span>{nombre}</span></p>
            <p>Apellio: <span>{apellido}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Detalle de la Tarea: <span>{realizartarea}</span></p>

            <button 
            className="button eliminar u-full-width"
            onClick={ () => eliminarTarea(tarea.id)}
            >
                Eliminar tareas &times;
            </button>

        </div>
     );
}
 
export default Tarea;