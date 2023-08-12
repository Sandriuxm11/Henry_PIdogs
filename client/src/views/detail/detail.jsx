import style from "./detail.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DetailCard from "../../components/DetailCard/DetailCard";
import { getDogById, cleanView } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = () => {
    const {id} = useParams();
    const dog = useSelector(state => state.dog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogById(id));
        return (() => {
            dispatch(cleanView());
        })
    }, [dispatch, id])

    return (
        <div>
            <h1>Detalle del Perrito con ID:</h1>
                <h1>{id}</h1>
                <div className={style.detalle}>
                <hr />
                <br />
                <DetailCard 
                id={dog.id}
                imagen={dog.imagen}
                name={dog.name}
                altura={dog.altura}
                peso={dog.peso}
                temperamento={dog.temperamento}
                años_de_vida={dog.años_de_vida}
                />
                <br />
            </div>

        </div>
    )
};

export default Detail;