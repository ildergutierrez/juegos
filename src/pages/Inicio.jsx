import { useState } from 'react'
import { Juegos } from '../juego.jsx'
import { Buscador } from '../juego.jsx'
import { coleccion } from '../data/juegos'
import icono from "../assets/icono.png"
export function Inicio() {
    return (
        <>
            <section className="App" id="top">
                <span className="logo">
                    <img
                        src={icono}
                        alt="Logo"
                    />
                </span>

                <p>
                    Bienvenido a nuestra colección de juegos bíblicos.
                    Explora y conoce más sobre ellos y diviértete.
                    <br />
                    <i>Solo da clic en uno para conocer sus detalles.</i>
                </p>
            </section>

            <BuscadorJuegos />

            <SubirVista />
        </>
    )
}
export function ListadodeJuegos() {
    return (
        <div className="container">
            <div className="row g-4">
                {coleccion.map((juego) => (
                    <div key={juego.id} className="col-12 col-md-6 col-lg-4">
                        <Juegos juego={juego} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SubirVista() {
    return (
        <div className="botonSubir">
            <a title="Subir" href="#top" className="btn btn-light btn-lg rounded-circle" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145786_1280.png" alt="Subir" className="icono-subir" />
            </a>
        </div>
    )
}
// Buscar juegos por título extraido de juego.jsx
export function BuscadorJuegos() {
    const [juegosFiltrados, setJuegosFiltrados] = useState(coleccion)

    const handleBuscar = (termino) => {
        const resultados = coleccion.filter((juego) =>
            juego.titulo.toLowerCase().includes(termino.toLowerCase())
        )

        setJuegosFiltrados(resultados)
    }

    return (
        <>
            <div className="container mt-4">
                <Buscador onBuscar={handleBuscar} />
            </div>

            <div className="container mt-4">
                <div className="row g-4">
                    {juegosFiltrados.map((juego) => (
                        <div
                            key={juego.id}
                            className="col-12 col-md-6 col-lg-4"
                        >
                            <Juegos juego={juego} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
