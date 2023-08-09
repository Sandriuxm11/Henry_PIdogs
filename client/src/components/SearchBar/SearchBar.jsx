import style from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div>
            <div className={style.SearchBar}>
                <span>Búsqueda por:</span>
                <input type="text" />
                <button>ID</button>
                <button>Nombre</button>
            </div>
        </div>
    )
};

export default SearchBar;