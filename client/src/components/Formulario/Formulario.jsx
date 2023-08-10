const Formulario = () => {
    return(
        <form>
            <div>
                <label htmlFor="name">Nombre de la Raza: </label>
                <input type="text" name="name"/>
            </div>

            <div>
                <label htmlFor="altura">Altura: </label>
                <input type="text" name="altura"/>
            </div>

            <div>
                <label htmlFor="peso">Peso: </label>
                <input type="text" name="peso"/>
            </div>

            <div>
                <label htmlFor="anosDeVida">Años de Vida: </label>
                <input type="text" name="anosDeVida"/>
            </div>

            <div>
                <label htmlFor="temperamento">Temperamentos: </label>
                <input type="text" name="temperamento"/>
            </div>

            <button type="submit">Crear Raza</button>
        
        </form>
    )

};

export default Formulario;