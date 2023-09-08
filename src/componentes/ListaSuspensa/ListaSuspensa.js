import './ListaSuspensa.css'

function ListaSuspensa(props){
    return(
            <div className='Lista-suspensa'>
                <label>{props.label}</label>
                <select>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
    );
}

export default ListaSuspensa