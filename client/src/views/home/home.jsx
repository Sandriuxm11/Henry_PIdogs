import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/Cardscontainer";
import { useEffect } from "react";
import { getDogs, cleanViewHome } from "../../redux/actions";
import style from "./home.module.css";

// SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
// Botones/Opciones para filtrar por temperamentos, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perros por orden alfabético y por peso.
// Paginado: el listado de razas de perros se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 8 perros por página.


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs());
        return(()=>{
            dispatch(cleanViewHome());
        })
    }, [dispatch]);

    return (
        <div className={style.home}>

        <hr />

        <h1>¡Tu Web favorita de Perritos!</h1>

        <CardsContainer />

        </div>
    )
};

export default Home;