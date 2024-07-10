import { useState } from 'react'
import Contador from './components/Contador'
import Interruptor from './components/Interruptor'
import './App.css'
import ListaDeTareasBasica from './components/listadetareasbasica/ListaDeTareasBasica'
// import FormularioRegistro from './components/FormularioRegistro'
import GaleriaImagenes from './components/galleryimages/GaleriaImagenes'


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

      <h1>Galería Imagenes</h1>
      <div>
         <GaleriaImagenes />
      </div>
      <br />
    </>
  )
}

export default App
