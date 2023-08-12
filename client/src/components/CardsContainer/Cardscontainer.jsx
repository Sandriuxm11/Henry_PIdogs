import Card from "../Card/card";
import style from "./Cardscontainer.module.css";

const CardsContainer = (props) => {
    const items = props.items.map(item => {
        return <Card 
        key={item.id}
        imagen={item.imagen}
        id={item.id}
        name={item.name}
        temperamento={item.temperamento}
        peso={item.peso}
        />
    });

    return (
          
        <div className={style.CardsContainer}>

        {items}
            
        </div>
    )
};

export default CardsContainer;