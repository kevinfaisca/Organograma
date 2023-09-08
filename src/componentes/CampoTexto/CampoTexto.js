import './CampoTexto.css'

const CampoTexto = (props) =>{
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} autoComplete='off'/>          
        </div>
    );
}

export default CampoTexto