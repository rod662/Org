import "./listaopciones.css"

const ListaOpciones = (props)=> {

        
    //Metodo Map
    

    const cambioEquipo = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista_opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={cambioEquipo}>
            <option value="" disabled defaultValue="" hidden>Selecciona tu equipo</option>
            { props.equipos.map((equipo, index)=>{
                return <option key={index} value={equipo}>{equipo}</option>
            }) }
        </select>
    </div>
}

export default ListaOpciones;