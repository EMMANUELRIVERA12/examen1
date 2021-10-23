import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ticket = (props) => {
    return (
        <div className="List">
            {
                Object.keys(props.compra).length !== 0

                    ?
                    <div>
                        <h3>Compra</h3>
                        <br></br>
                        <div className="Ticket">
                            <p><strong>{props.compra.nombre}</strong> ({props.compra.idioma})</p>
                            <p><strong>Hora: </strong>{props.compra.horario}</p>
                            <p><strong>Cantidad: </strong><input type='number' className="text-center" style={{ width: '20vmin' }} value={props.compra.cantidad} min="1" max="20" onChange={e => props.calcular(e.target.value, props.compra)} /></p>
                            <p><strong>Total: </strong>${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            <Button onClick={() => props.eliminarCompra()} variant="danger" >Cancelar</Button>
                            <Button onClick={() => props.comprar(props.compra)} variant="success">Comprar</Button>
                        </div>
                    </div>

                    :
                    <div className="Ticket2">
                        <p><h3>Selecciona una película dando click en su horario</h3></p>
                    </div>

            }
        </div>
    );
}

export default Ticket;