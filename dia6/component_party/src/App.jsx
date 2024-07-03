import ListaTareas from '../tareas/ListaTareas'
import TarjetaUsuario from './components/TarjetaUsuario'
import './App.css'

function App() {

  const tareas = [
    {id: 1, nombre: "Estudiar React", completada: true},
    {id: 2, nombre: "Leer un libro", completada: false},
    {id: 3, nombre: "Mejorar mi nivel de surf", completada: false},
    {id: 4, nombre: "Aprender a cocinar", completada: true},
    {id: 5, nombre: "Ver series", completada: false},
];


  return (
    <>
    <h1>Trabajo sobre tarjetas de usuario</h1>
    <div className="tarjetas_usuarios">
    <TarjetaUsuario nombre ="Jesús" edad="24" ocupacion={["instructor fitness"]}/>
    <TarjetaUsuario nombre ="Timmy" edad="22" ocupacion={["Dentista"]}/>
    <TarjetaUsuario nombre ="Dimitry" edad="22" ocupacion={["Panadero"]}/>
    <TarjetaUsuario nombre ="Nadir" edad="27" ocupacion={["Camarero"]}/>
    <TarjetaUsuario nombre ="Jordan" edad="25" ocupacion={["Logística"]}/>
    <TarjetaUsuario nombre ="Alvaro" edad="26" ocupacion={["Abogado"]}/>
    </div>


    <h1>Lista de tareas</h1>
    <ListaTareas tareas={tareas} />
    </>
  )
}

export default App
