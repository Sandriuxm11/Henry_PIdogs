import { useState } from "react";
import {useDispatch} from "react-redux";
import style from "./SearchBar.module.css";
import { searchByName } from "../../redux/actions";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();

    const [busqueda, setBusqueda] = useState({
        input: "",
    }); 

    const handleWrite = (event) => {
        const write = event.target.value;
        setBusqueda({...busqueda, input: write});
    };

    const handleClick = () => {
        dispatch(searchByName(busqueda.input));
    };

    return (
        <div>
            <div className={style.SearchBar}>
                <span>Buscador:</span>
                <input type="text" onChange={handleWrite} value={busqueda.input}/>
                <Link to={`/home/name=${busqueda.input}`}>
                    <button name="boton" onClick={handleClick}>Buscar</button>
                </Link>
            </div>
        </div>
    )
};

export default SearchBar;