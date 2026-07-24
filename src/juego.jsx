import "./index.css";
import { useNavigate} from "react-router-dom";
export function Juegos({ juego }) {
  const navigate = useNavigate();
  return (
    
    <div className="card juego-card h-100" onClick={() => navigate(`/juego/${juego.id}`)}>
      <img src={juego.img} alt={juego.titulo} className="card-img-top juego-img" />

      <div className="card-body">
        <h5 className="card-title text-center">{juego.titulo}</h5>
      </div>

      <div className="juego-overlay">
        <h5>{juego.titulo}</h5>
        <p>
          {juego.descripcion.length > 450
            ? juego.descripcion.slice(0, 450) + "..."
            : juego.descripcion}
        </p>
      </div>
     
    </div>
  )
}
export function DetalleJuego({ detalles }) {
  return (
    <div className="container mt-5">
      <h2>{detalles.titulo}</h2>
      <img src={detalles.img} alt={detalles.titulo} className="img-fluid mb-3 imagen-detalle" />
      <p>{detalles.descripcion}</p>
      <h4>Reglas del Juego:</h4>
      <ul>
        {detalles.reglas.map((regla, index) => (
          <li key={index}>{regla}</li>
        ))}
      </ul>
      <h4>Beneficios:</h4>
      <ul>
        {detalles.beneficios.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
      </ul>
      <h4>Edad Recomendada:</h4>
      <p>{detalles.edad}</p>
    </div>
  )
}
// input para buscar juegos por título
export function Buscador({ onBuscar }) {
    const handleChange = (event) => {
        onBuscar(event.target.value)
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar juego..."
                onChange={handleChange}
            />
        </div>
    )
}