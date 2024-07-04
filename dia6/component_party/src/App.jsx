import ListaTareas from './components/tareas/ListaTareas'
import TarjetaUsuario from './components/TarjetaUsuario'
import PerfilUsuario from './components/PerfilUsuario';
import './App.css'


function App() {

//   const tareas = [
//     {id: 1, nombre: "Estudiar React", completada: true},
//     {id: 2, nombre: "Leer un libro", completada: false},
//     {id: 3, nombre: "Mejorar mi nivel de surf", completada: false},
//     {id: 4, nombre: "Aprender a cocinar", completada: true},
//     {id: 5, nombre: "Ver series", completada: false},
// ];


  const userData = {
    nombre: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp&quot;",
        direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield',
        codigoPostal: '12345'
        }
      }


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

    <br />
    <br />
    <ListaTareas tareas={tareas} />

    <h2>Perfil de usuario</h2>
    <PerfilUsuario
      userData={userData}
    />
    </>
  )
}

export default App
