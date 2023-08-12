import style from "./DetailCard.module.css";

const DetailCard = (props) => {
return (
    <div className={style.DetailCard}>
        <h1>{props.name}</h1>
        <img src={props.imagen} alt={props.name} width="250px" height="250px" />
        <p>ID: {props.id}</p>
        <p>Altura: {props.altura}</p>
        <p>Peso: {props.peso}</p>
        <p>Temperamento: {props.temperamento}</p>
        <p>Años de vida: {props.años_de_vida}</p>
    </div>
)
};

export default DetailCard;