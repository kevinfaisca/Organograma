import './Time.css'
import Colaborador from '../Colaborador/Colaborador'

const Time = (props) => {

    const h3Borda = {borderColor: props.corPrimaria}

    return (
        <section className='time' style={{ backgroundColor: props.corSegundaria}}>
            <h3 style={h3Borda}>{props.nome}</h3>
            <Colaborador/>
        </section>
    )

}

export default Time