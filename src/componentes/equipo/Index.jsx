import './equipo.css'
import Colaborador from '../colaborador/Index'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const obj = {
        backgroundColor: hexToRgba (props.datos.colorPrimario, 0.6)
    }
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    const { id } = props.datos

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input className='input_color'
                    type='color'
                    value={props.datos.colorPrimario}
                    onChange={(e)=> {
                        actualizarColor(e.target.value, id)
                    }}
                
                />
            <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
            <div className="colaboradores">
            {
                colaboradores.map((colaborador, index)=> <Colaborador datos={colaborador} key={index} colorPrimario={props.datos.colorPrimario} eliminarColaborador={eliminarColaborador}/>)
            }
            </div>
            
            </section>
        }
    </>
}

export default Equipo;