import React from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = (props) => {
    return (
        <div className="Cartelera">
            <h4>Cartelera</h4>
            {
                props.cartelera.map((elemento, index) => {
                    return (
                        <div className="Pelis" key={index}> 
                            <img src={elemento.url} alt={elemento.nombre} />
                                <p>{elemento.nombre}</p>
                                <p>{elemento.idioma}</p>
                                <p>{elemento.clasificacion}</p>
                                <p>{elemento.duracion}</p>
                                <div className="Horarios">
                                    {elemento.horarios.map((h, ind) => <Button variant="dark" key={ind} onClick={() => props.agregar(elemento, h)} style={{ margin: '1vmin' }}>{h}</Button>)}
                                </div>
                        </div>)
                    }
                )
            }
        </div>
    )
}
export default Movies;