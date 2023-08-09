import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/Cardscontainer";
import { useEffect } from "react";
import { getDogs } from "../../redux/actions";

// SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
// Cuando se le hace click a una Card deberá redirigir al detalle de esa raza específica.
// Botones/Opciones para filtrar por temperamentos, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perros por orden alfabético y por peso.
// Paginado: el listado de razas de perros se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 8 perros por página.


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch])

    return (
        <>
        <h1>Esta es la vista del Home</h1>

        <CardsContainer />

        </>
    )
};

export default Home;