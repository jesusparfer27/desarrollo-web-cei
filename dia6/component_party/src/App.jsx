import ListaTareas from './components/tareas/ListaTareas'
import TarjetaUsuario from './components/TarjetaUsuario'
import PerfilUsuario from './components/PerfilUsuario';
import GaleriaImagenes from './components/GaleriaImagenes/index.jsx'
import BlogPost from './components/BlogPost.jsx';
import './App.css'
import '../src/components/css/estilos.css'


function App() {

// Traer datos de tareas
  const tareas = [
    {id: 1, tarea: "Estudiar React", completada: true},
    {id: 2, tarea: "Leer un libro", completada: false},
    {id: 3, tarea: "Mejorar mi nivel de surf", completada: false},
    {id: 4, tarea: "Aprender a cocinar", completada: true},
    {id: 5, tarea: "Ver series", completada: false},
];

// Traer perfil de la base de datos
const userData = {
  nombre: 'El Barto',
  email: 'elbarto@fox.com',
  img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
      direccion: {
      calle: 'Calle Falsa 123',
      ciudad: 'Springfield',
      codigoPostal: '12345'
      }
}

// Traer info galería de imagenes
const imageList = [
  { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
  { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
  { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];

  return (
    <>
    <h1 className='h1Styles'>Trabajo sobre tarjetas de usuario</h1>
    <div className='Card'>
    <TarjetaUsuario nombre ="Jesús" edad="24" ocupacion={["instructor fitness"]}/>
    <TarjetaUsuario nombre ="Timmy" edad="22" ocupacion={["Dentista"]}/>
    <TarjetaUsuario nombre ="Jesús" edad="24" ocupacion={["instructor fitness"]}/>
    <TarjetaUsuario nombre ="Timmy" edad="22" ocupacion={["Dentista"]}/>
    {/* <ul>
      <li><b>{nombre}</b></li>
      <li><b>{edad}</b></li>
    </ul> */}
    </div>

    <br />
    <br />
    <h1 className='h1Styles'>Tareas para este verano</h1>
    <ListaTareas tareas={tareas} />

    {/* <h2>Perfil de usuario</h2> */}
    <PerfilUsuario usuario={userData}/>
    
      {/* 
      *
      * GALERÍA RICK Y MORTY
      *
      */}


    <GaleriaImagenes lista={imageList}/>

      {/* 
      *
      * BLOGSPOT 
      * 
      */}

    <BlogPost titulo= "Mi primer Post" autor="Tomi" fecha="2024-07-23">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae error cumque vero, 
      </p>

      <p>
      sit exercitationem itaque obcaecati eaque ullam officiis delectus, incidunt nesciunt minus saepe dolores iusto soluta fugiat illo!
      </p>
    </BlogPost> 
    {/* Crear propios componentes */}
    </>
    )
}

export default App
