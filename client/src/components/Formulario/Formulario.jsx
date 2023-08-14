import style from "./Formulario.module.css";
import { useState } from "react";
import axios from "axios";

const validatenombre = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

const Formulario = () => {
    const [form, setForm] = useState({
        name: "",
        imagen: "",
        altura: "",
        peso: "",
        anosDeVida: "",
        temperamento: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        imagen: "",
        altura: "",
        peso: "",
        anosDeVida: "",
        temperamento: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validateName({...form, [property]: value});
        // validateUrl({imagen: value});
        setForm({...form, [property]: value});
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/dogs/", form)
        .then(alert("Tu perrito ha sido registrado exitosamente."))
        .catch(alert("No se pudo crear la raza nueva."))
    };

    const validateName = (form) => {
        if((form.name).match(validatenombre)!=null && form.name.length > 2) setErrors({...errors, name: ""});
        else{ setErrors({...errors, name: "Hay errores en el nombre"})};
        if(form.name === ""){setErrors({...errors, name: "El nombre está vacío"})};

        // if(form.imagen.length > 2) setErrors({...errors, imagen: ""});
        // else{ setErrors({...errors, imagen: "Hay errores en el nombre"})};
        // if(form.imagen === ""){setErrors({...errors, imagen: "El nombre está vacío"})};

    };

    return(
        <form onSubmit={submitHandler} className={style.formulario}>
            <div>
                <label className={style.label} htmlFor="name">Nombre de la Raza:</label>
                <br />
                <input className={style.input} placeholder="Nombre" type="text" name="name" value={form.name} onChange={changeHandler}/>
                <br />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <br />
            <div>
                <label className={style.label} htmlFor="imagen">Imagen:</label>
                <br />
                <input className={style.input} placeholder="Colocar URL de la imagen" type="text" name="imagen" value={form.imagen} onChange={changeHandler}/>
                <br />
                {errors.imagen && <span>{errors.imagen}</span>}
            </div>
            <br />
            <div>
                <label className={style.label} htmlFor="altura">Altura:</label>
                <br />
                <input className={style.input} placeholder="Altura (Desde - Hasta)" type="text" name="altura" value={form.altura} onChange={changeHandler}/>
                <br />
                {errors.altura && <span>{errors.altura}</span>}
            </div>
            <br />
            <div>
                <label className={style.label} htmlFor="peso">Peso:</label>
                <br />
                <input className={style.input} placeholder="Peso  (Desde - Hasta)" type="text" name="peso" value={form.peso} onChange={changeHandler}/>
                <br />
                {errors.peso && <span>{errors.peso}</span>}
            </div>
            <br />
            <div>
                <label className={style.label} htmlFor="anosDeVida">Años de Vida:</label>
                <br />
                <input className={style.input} placeholder="Años de Vida" type="text" name="anosDeVida" value={form.anosDeVida} onChange={changeHandler}/>
                <br />
                {errors.anosDeVida && <span>{errors.anosDeVida}</span>}
            </div>
            <br />
            <div>
                <label className={style.label} htmlFor="temperamento">Temperamentos:</label>
                <br />
                <input className={style.input} placeholder="Elige ID según lista" type="text" name="temperamento" value={form.temperamento} onChange={changeHandler}/>
                <br />
                {errors.temperamento && <span>{errors.temperamento}</span>}
            </div>

            <br />

            <button type="submit">Crear Raza</button>
        
        </form>
    )

};

export default Formulario;