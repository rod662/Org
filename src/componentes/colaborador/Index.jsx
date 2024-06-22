import './colaborador.css'

const Colaborador = (props) => {
    const { id, nombre, puesto, foto, equipo } = props.datos
    const { colorPrimario, eliminarColaborador } = props
 
    return <div className='colaborador'>
        
        <div className='encabezado'style={{backgroundColor: colorPrimario}} >
            <div className='contenedor__boton'>
            <button type='button' onClick={() =>eliminarColaborador(id)} className='boton_eliminar'><i className="bi bi-x-octagon-fill"></i></button>
            </div>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>

    </div>
}

export default Colaborador;