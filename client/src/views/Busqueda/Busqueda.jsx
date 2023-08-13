import { useSelector } from "react-redux";
import style from "./Busqueda.module.css";
import CardsContainerSearch from "../../components/CardsContainerSearch/CardsContainerSearch";

const Busqueda = () => {
    const searchedDogs = useSelector(state => state.dogSearched);

    return (
        <div className={style.busqueda}>

        <hr />

        <h1>Tu búsqueda:</h1>

        <br />

        <CardsContainerSearch searchedDogs={searchedDogs}/>

        <br />

        </div>
    )
};

export default Busqueda;