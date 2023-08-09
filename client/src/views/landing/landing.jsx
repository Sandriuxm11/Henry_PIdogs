import style from "./landing.module.css";
import image from "../../imagenes/los-perros-tienen-mucha-informacion-que-desconoces.jpg";
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div className={style.Landing}>

            <h1>¡Bienvenidos a mi página de Perritos ON-LINE!</h1>
            <hr></hr>
            
            <p>Aquí podrás encontrar información sobre tu peludito favorito, conocer más sobre sus características en general, nombre, peso, talla, temperamento, y escoger alguno que más vaya con tu personalidad.</p>
            <br></br>
            <div>
                <button>
                    <Link to="./home">INGRESAR AHORA</Link>
                </button>
            </div>
            <br />
            <div>
                <img className={style.imagePrincipal} src={image} alt="Caritas de perros felices." /> 
                <figcaption>Dueños felices, peluditos felices.</figcaption>
            </div>

           
        </div>
    )
};

export default Landing;