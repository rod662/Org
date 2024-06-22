import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './componentes/header/header.jsx';
import Formulario from './componentes/formulario/formulario.jsx';
import MiOrg from './componentes/MiOrg/Index.jsx';
import Equipo from './componentes/equipo/Index.jsx';
import Footer from './componentes/footer/Index.jsx';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  //Ternario --> condicion? seMuestra : No se muestra 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    colaborador.id = uuid();
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
    
  }

  // actualizar color 

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Lista de equipos 
  

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)} registrarColaborador = {registrarColaborador} crearEquipo = {crearEquipo} /> : <div></div> }
      <MiOrg  cambiarMostrar = {cambiarMostrar} />
      
      { 
        equipos.map( (equipo) =>{
          return <Equipo datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColaborador ={eliminarColaborador}
          actualizarColor={actualizarColor}
          />
        })
      }

      <Footer />
    </div>
    
  )
}

export default App
