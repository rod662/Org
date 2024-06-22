import { useState } from "react";
import "./formulario.css"
import Campotexto from "../campotexto/campotexto";
import ListaOpciones from "../listaopciones";
import Boton from "../boton/Index";
import Limpiar from "../Limpiar/Index";

function Formulario(props) {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const envio = (evento) => {
        evento.preventDefault();
        console.log("Envio");
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosEnviar);

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>Llena el formulario para agregar un colaborador.</h2>
            <Campotexto titulo="Nombre" placeholder="Ingresar nombre" required valor ={nombre} setValor={setNombre}/>
            <Campotexto titulo="Puesto" placeholder="Ingresar puesto" required valor ={puesto} setValor={setPuesto}/>
            <Campotexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor ={foto} setValor={setFoto}/>
            <ListaOpciones valor ={equipo} actualizarEquipo={actualizarEquipo} equipos ={props.equipos} />
            <Boton>
                Agregar colaborador
            </Boton>
            <Limpiar />

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Llena el formulario para agregar un equipo.</h2>
            <Campotexto titulo="Titulo" placeholder="Ingresar titulo" required valor ={titulo} setValor={actualizarTitulo}/>
            <Campotexto titulo="Color" type="color" placeholder="Ingresar el color Hexadecimal" required valor ={color} setValor={actualizarColor}/>
            <Boton>
                Agregar Equipo
            </Boton>
            <Limpiar />

        </form>
    </section>
}

export default Formulario;