import style from "./card.module.css";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <p>{props.imagen}</p>
            <p>Nombre: {props.name}</p>
            <p>Temperamento: {props.temperamento}</p>
            <p>Peso: {props.peso}</p>
        </div>
    )
};

export default Card;