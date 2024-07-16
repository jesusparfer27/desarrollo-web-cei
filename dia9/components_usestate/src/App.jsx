import { useState } from 'react'
import Contador from './components/Contador'
import Interruptor from './components/Interruptor'
import './App.css'
import ListaDeTareasBasica from './components/listadetareasbasica/ListaDeTareasBasica'
import { NewFormulario } from './components/NewFormulario'
// import FormularioRegistro from './components/FormularioRegistro'
import GaleriaImagenes from './components/galleryimages/GaleriaImagenes'
// import Timer from './components/timer/Timer'
import FormularioExercise from './formularioexercise/FormularioExercise'
import FormularioMultiple from './components/FormularioMultiple'
// import Calculator from './components/Calculator'
// import TestEffect from './components/TestEffect'
import {Ejercicio1, Ejercicio2, Ejercicio3} from './components/actividadesuseeffect/Actividades'


function App() {


  return (
    <>
      <h1 className='h1Style'>Ejemplos de UseState</h1>
      <h1>Ejericio contador</h1>
      <div>
        <Contador />
      </div>
      <br />

      <h1>Ejercicio interruptor</h1>
      <div>
        <Interruptor />
      </div>
      <br />

      <h1>Ejercicio tarea</h1>
      <div>
        <ListaDeTareasBasica />
      </div>
      <br />


      {/* <h1>Ejercicio Formulario</h1>
      <div>
        <FormularioRegistro />
      </div>
      <br /> */}

      <h1>New Formulario</h1>
      <div>
        < NewFormulario />
      </div>
      <br />

      <h1>Formulario Ejercicios</h1>
      <div>
        <FormularioExercise />
      </div>
      <br />

      <h1>Galería Imagenes</h1>
      <div>
        <GaleriaImagenes />
      </div>
      <br />

      {/* <h1>Timer</h1>
      <div>
        <Timer />
      </div>
      <br /> */}

      <h1>Formulario de multiples páginas</h1>
      <div>
        <FormularioMultiple />
      </div>
      <br />

      {/* <h1>Test Effect</h1>
      <div>
        <TestEffect />
      </div>
      <br /> */}

      {/* <h1>Calculadora</h1>
      <div>
        <Calculator />
      </div>
      <br /> */}

      <h1>Actividades useEffect</h1>
      <div>
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
      </div>
      <br />
    </>
  )
}

export default App
