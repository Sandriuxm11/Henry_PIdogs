import Formulario from "../../components/Formulario/Formulario";
import style from "./form.module.css";

const Form = () => {
    return (
        <div className={style.form}>
            <br />
            <h1>Si no tenemos una raza... Agregala aqui!</h1>
            <p>Nosotros somos conscientes que posiblemente no tengamos toda la información. Por eso, aceptamos todas tus recomandaciones :D</p>
            <hr />
            <br />
            <Formulario />
            <br />
        </div>
    )
};

export default Form;