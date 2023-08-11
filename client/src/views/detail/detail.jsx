import style from "./detail.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DetailCard from "../../components/DetailCard/DetailCard";
import { getDogById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = () => {
    const {id} = useParams();
    const dog = useSelector(state => state.dog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogById(id));
    }, [dispatch])

    return (
        <div>
            <h1>Detalle del Perrito con ID:</h1>
                <h1>{id}</h1>
                <div className={style.detalle}>
                <hr />
                <DetailCard 
                id={dog.id}
                imagen={dog.imagen}
                name={dog.name}
                altura={dog.altura}
                peso={dog.peso}
                temperamentos={dog.temperamentos}
                años_de_vida={dog.años_de_vida}
                />
                <br />
            </div>

        </div>
    )
};

export default Detail;