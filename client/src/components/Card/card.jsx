import style from "./card.module.css";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <Link to={`/detail/${props.id}`}>
                <p>{props.imagen}</p>
                <p>Nombre: {props.name}</p>
                |<p>Temperamento: {props.temperamento}</p>
                <p>Peso: {props.peso}</p>
            </Link>
        </div>
    )
};

export default Card;