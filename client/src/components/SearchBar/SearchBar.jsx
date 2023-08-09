import style from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div>
            <div className={style.SearchBar}>
                <input type="text" />
                <button>Buscar</button>
            </div>
        </div>
    )
};

export default SearchBar;