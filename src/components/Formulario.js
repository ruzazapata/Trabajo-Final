import React, { useState } from 'react';
import  { v4 as uuidv4 } from 'uuid';
uuidv4();


const Formulario = ({ crearEquipo }) => {

    // Crear State de Tareas
    const [equipo, actualizarEquipo] = useState({
        nombre: '',
        apellido: '',
        tipo: '',
        codigo: '',
        fecha: '',
        hora: '',
        detalleequipo: ''
    });

    const [ error, actualizarError ] = useState(false)

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState =  e  => {
 
        actualizarEquipo({
            ...equipo,
           [e.target.name] : e.target.value
        })
}

// extraer los valores
    const { nombre, apellido, tipo, codigo, fecha, hora, detalleequipo } = equipo


// Cuando el usuario presione agragar equipo
    const submitEquipo = (e) => {
        e.preventDefault();
         console.log(nombre)

        // Validar
        // || los pipes significa "o" y comprueba que se vaya cumpliendo cada una u otra
        if(nombre.trim() === '' || apellido.trim() === '' ||  tipo.trim() === '' || codigo.trim() === '' || fecha.trim() === '' || hora.trim() === '' || detalleequipo.trim() === '' ){
            actualizarError(true)
            return;
        }

        // eliminar el mensaje previo
        actualizarError(false)


        // Asignar un ID
        equipo.id = uuidv4();
        console.log(equipo)

        //Crear un equipo
        crearEquipo(equipo)

        // Reinciar el formulario
        actualizarEquipo({
            nombre: '',
            apellido: '',
            tipo: '' ,
            codigo: '' ,
            fecha: '',
            hora: '',
            detalleequipo: ''
         })

    }

    return ( 
        <>
            <h2>Cargar equipo</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatrios</p> : null }
            <form className="u-full-whidh"
            onSubmit={submitEquipo}
            >
                <label>Nombre </label>
                <input
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Nombre de la persona"
                onChange={actualizarState}
                value={nombre}
                >
                </input>

                <label>Apellido </label>
                <input
                type="text"
                name="apellido"
                className="u-full-width"
                placeholder="Apellido de la persona"
                onChange={actualizarState}
                value={apellido}
                >
                </input>

                <label>Tipo de equipamiento </label>
                <input
                type="text"
                name="tipo"
                className="u-full-width"
                placeholder="Tipo de equipamiento"
                onChange={actualizarState}
                value={tipo}
                >
                </input>

                <label>Codigo del equipo </label>
                <input
                type="text"
                name="codigo"
                className="u-full-width"
                placeholder="Codigo del equipamiento"
                onChange={actualizarState}
                value={codigo}
                >
                </input>

                <label>Fecha </label>
                <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
                >
                </input>

                <label>Hora </label>
                <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
                >
                </input>

                <label>Detalles del equipo </label>
                <textarea
                name="detalleequipo"
                className="u-full-width button-primary"
                onChange={actualizarState}
                value={detalleequipo}
                >
                </textarea>

                <button
                type="submit"
                className="u-full-width button-primary"
                >
                    Agragar equipo
                </button>

            </form>
        </>
     );
}
 
export default Formulario;