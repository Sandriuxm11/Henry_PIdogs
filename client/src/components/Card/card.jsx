import style from "./card.module.css";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <Link className={style.link} to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
                <img src={props.imagen} alt={props.name} width="180" height="180px"/>
                <p>Temperamento: {props.temperamento}</p>
                <p>Peso: {props.peso}</p>
            </Link>
        </div>
    )
};

export default Card;