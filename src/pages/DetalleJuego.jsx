import '../index.css'
import { coleccion } from '../data/juegos'
import { useParams } from 'react-router-dom'

export function DetalleJuego() {
    const { id } = useParams();
    const juego = coleccion.find(j => j.id === Number(id));
    return (
        <div className="container mt-5">
            {juego ? (
                <div className="card">
                    <h1 className="card-title titulo-detalle">{juego.titulo}</h1>
                    <img src={juego.img} alt={juego.titulo} className="card-img-top imagen-detalle" />
                    <div className="card-body">

                        <p className="card-text descripcion-detalle">{juego.descripcion}</p>

                         <TarjetasListas
                            Titulo="📜 Reglas del Juego"
                            icono="✔️"
                            items={juego.reglas}
                            >
                        </TarjetasListas>
                        <TarjetasListas
                            Titulo="🏆 Beneficios"
                            icono="⭐"
                            items={juego.beneficios}
                            >
                        </TarjetasListas>
                        <h4>Edad Recomendada:</h4>
                        <p>{juego.edad}</p>
                    </div>
                </div>
            ) : (
                <p>Juego no encontrado.</p>
            )}
            <BotonVolver />
        </div>
    )
}

export function BotonVolver() {
    return (
        <div className="botonvolver">
            <a href="/" className="btn btn-light btn-lg rounded-circle" title="Volver" >
                <img src="https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145787_1280.png" alt="Volver" className="icono-volver" />
            </a>
        </div>
    )
}

export function TarjetasListas(
    {Titulo, icono, items}
){
    return(
        <div className="row g-3">
            <h4> {Titulo}</h4>
            {items.map((item, index) => (
                <div key={index} className="col-12 col-md-6">
                    <div className="card ">
                        <div className="card-body">
                            <span className="me-2">{icono}</span>
                            {item}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}