// import { useSelector } from "react-redux";
import style from "./Busqueda.module.css";
// import Card from "../../components/Card/card";

const Busqueda = () => {

    return (
        <div className={style.busqueda}>

            <hr />

            <h1>Tu Búsqueda:</h1>

        {/* <CardsContainer /> */}

        </div>
    )

    // const dogSearched = useSelector(state => state.dogSearched);

    // return (
    // <div>
    //     <hr />
    //         <h1>Tu Búsqueda:</h1>
    //     {/* <div className={style.CardsContainer}>
    //         {dogSearched.map(dog => {
    //             return <Card 
    //             key={dog.id}
    //             imagen={dog.imagen}
    //             id={dog.id}
    //             name={dog.name}
    //             temperamento={dog.temperamento}
    //             peso={dog.peso}
    //             />
    //         })}
    //     </div> */}
    // </div>
    // )

};

export default Busqueda;