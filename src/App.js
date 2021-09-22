import React, { useEffect, useState  } from 'react';
import Formulario from "./components/Formulario";
import Equipo from './components/Equipo';


function App() {

  // Equipos en el localStorage
  let stockEquipos = JSON.parse(localStorage.getItem('equipos'));
  if(!stockEquipos) {
    stockEquipos = [];
  }

  // Arreglo de las tareas
  const [ equipos, guardarEquipos ] = useState(stockEquipos);

  // Use Effect para realizar ciertas operaciones cuando el state cambia

  useEffect( () => {

    if(stockEquipos) {
      localStorage.setItem('equipos', JSON.stringify(equipos))
    } else {
      localStorage.setItem('equipos', JSON.stringify([]))
    }
  
  },[equipos]);


  // Funcion que tome las tareas actuales y agregue la nueva
  const crearEquipo = equipo => {
   guardarEquipos([
     ...equipos,
     equipo
   ])
  }

  // Funcion que elimnina las tareas por su id
  const eliminarEquipo = id => {
    const nuevosEquipos = equipos.filter( equipo => equipo.id !== id);
    guardarEquipos(nuevosEquipos);
  }

  // Mensaje condicional
  const titulo = equipos.length === 0 ? 'No se encuentra equipamiento en stock' : 'Equipamiento de Comunicaciones disponible'

  return (
    <>
      <h1>Almacen de Equipamiento de Comunicaciones</h1>

      <div className="container">
        <div className="row">
         <div className="one-half column">
          <Formulario
          crearEquipo={crearEquipo}
           />
         </div>


         <div className="one-half column">
          <h2>{titulo}</h2>
          { equipos.map( equipo => (
            <Equipo
              key={equipo.id}
              equipo={equipo}
              eliminarEquipo={eliminarEquipo}
             />
          ))}
         </div>

        </div>

      </div>
    </>
  );
}

export default App;
