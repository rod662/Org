import { useState } from "react";
import "./campotexto.css"

function Campotexto(props){
    const [valor, setValor] = useState("")
    const manejarCambio = (e) => {
        props.setValor(e.target.value)

        
    }
    const { type = "text" } = props

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo} </label>
        <input 
            type={type}
            placeholder={props.placeholder} 
            required = {props.required} 
            valor={props.valor}
            onChange={manejarCambio}>
            
        </input>
    </div>
};

export default Campotexto;