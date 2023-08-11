const DetailCard = (props) => {
return (
    <div>
        <h1>{props.name}</h1>
        <img src={props.imagen} alt={props.name} />
        <p>ID: {props.id}</p>
        <p>Altura: {props.altura}</p>
        <p>Peso: {props.peso}</p>
        <p>Temperamento: {props.temperamento}</p>
        <p>Años de vida: {props.años_de_vida}</p>
    </div>
)
};

export default DetailCard;