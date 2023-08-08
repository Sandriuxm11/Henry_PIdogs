import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/Cardscontainer";
import { useEffect } from "react";
import { getDogs } from "../../redux/actions";

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