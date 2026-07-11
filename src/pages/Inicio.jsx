import { Juegos } from '../juego.jsx'
import { coleccion } from '../data/juegos'
import icono from "../assets/icono.png";
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

                <p>Bienvenido a nuestra colección de juegos bíblicos. Explora y conoce más sobre ellos y diviértete. <br /><i>Solo da clic en uno para conocer sus detalles.</i></p>

            </section>

            <ListadodeJuegos />
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
