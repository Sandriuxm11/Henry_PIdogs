import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/Cardscontainer";
import Paginado from "../../components/paginado/Paginado";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getDogs } from "../../redux/actions";
import style from "./home.module.css";

// SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
// Botones/Opciones para filtrar por temperamentos, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perros por orden alfabético y por peso.

const cardsPerPage = 8;

const Home = () => {
    const dogs = useSelector(state => state.dogs);

    const [items, setItems] = useState([...dogs]?.splice(0,cardsPerPage));

    const [currentPage, setCurrentPage] = useState(1);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    const prevHandler = () => {
        const prevPage = currentPage-1;

        if(prevPage < 1) return;

        const firstIndex = (prevPage-1) * cardsPerPage;

        setItems([...dogs]?.splice(firstIndex,cardsPerPage));
        setCurrentPage(prevPage);
    }

    const nextHandler = () => {
        const totalElementos = dogs.length;
        const nextPage = currentPage+1;
        const firstIndex = currentPage * cardsPerPage;

        if(nextPage > (Math.ceil(totalElementos/cardsPerPage))) return;

        setItems([...dogs]?.splice(firstIndex,cardsPerPage));
        setCurrentPage(nextPage);
    }

    return (
        <div className={style.home}>

        <hr />

        <h1>¡Tu Web favorita de Perritos!</h1>

        <Paginado currentPage={currentPage} nextHandler={nextHandler} prevHandler={prevHandler}/>
        <br />

        <CardsContainer items={items}/>

        <br />

        </div>
    )
};

export default Home;