import { useState } from 'react';
import './MiOrg.css'


const MiOrg = (props) => {

    /* const manejarClick = () => {

        const [mostrar, actualizarMostrar] = useState(true)
        console.log("Mostrar/ocultar elemento", mostrar);
        actualizarMostrar()
    } */

    return <section className="orgsection">
        <h3 className="title">Mi organización</h3>
        <i className="bi bi-plus-square-fill" onClick={props.cambiarMostrar}></i>
    </section>
}

export default MiOrg;