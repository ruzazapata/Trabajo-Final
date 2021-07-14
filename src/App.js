import React, { useEffect, useState  } from 'react';
import Formulario from "./components/Formulario";
import Tarea from './components/Tarea';


function App() {

  // tareas en el localStorage
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if(!tareasIniciales) {
    tareasIniciales = [];
  }

  // Arreglo de las tareas
  const [ tareas, guardarTareas ] = useState(tareasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia

  useEffect( () => {

    if(tareasIniciales) {
      localStorage.setItem('tareas', JSON.stringify(tareas))
    } else {
      localStorage.setItem('tareas', JSON.stringify([]))
    }
  
  },[tareas]);


  // Funcion que tome las tareas actuales y agregue la nueva
  const crearTarea = tarea => {
   guardarTareas([
     ...tareas,
     tarea
   ])
  }

  // Funcion que elimnina las tareas por su id
  const eliminarTarea = id => {
    const nuevasTareas = tareas.filter( tarea => tarea.id !== id);
    guardarTareas(nuevasTareas);
  }

  // Mensaje condicional
  const titulo = tareas.length === 0 ? 'No hay Tareas' : 'Adminstra tus tareas'

  return (
    <>
      <h1>Adminstrador de tareas</h1>

      <div className="container">
        <div className="row">
         <div className="one-half column">
          <Formulario
          crearTarea={crearTarea}
           />
         </div>


         <div className="one-half column">
          <h2>{titulo}</h2>
          { tareas.map( tarea => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              eliminarTarea={eliminarTarea}
             />
          ))}
         </div>

        </div>

      </div>
    </>
  );
}

export default App;
