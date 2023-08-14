import {Link} from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

    return(
        <div className={style.navBar}>
            
            <Link to="/" className={style.Link}>Bienvenida</Link>
            <Link to="/home" className={style.Link}>Home</Link>
            <Link to="/create" className={style.Link}>Form</Link>

        </div>
    )
};

export default NavBar;