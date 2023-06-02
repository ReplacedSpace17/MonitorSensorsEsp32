import './css/targets.css'

function Targets(props) {
    return (
      
                <div class="card">
                    <h1 className='title'>{props.titulo}</h1>
                    <img src={props.icono}/>
                    <h1 className='valor'>{props.valor}</h1>
                </div>
        
    );
}
export default Targets; 