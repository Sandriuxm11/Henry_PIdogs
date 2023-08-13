import style from "./CardsContainerSearch.module.css";
import Card from "../Card/card";

const CardsContainerSearch = (props) =>  {
    return(
        <div className={style.buscados}>
            {props.searchedDogs.map(perro => <Card 
            key={perro.id}
            imagen={perro.imagen}
            id={perro.id}
            name={perro.name}
            temperamento={perro.temperamento}
            peso={perro.peso}
            />)}

        </div>
    )
};

export default CardsContainerSearch;