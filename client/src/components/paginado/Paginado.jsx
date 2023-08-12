const Paginado = (props) => {
    return (
        <div>

            <h3>Estás en la página: {props.currentPage}</h3>

            <button onClick={props.prevHandler}>Prev</button>
            <button onClick={props.nextHandler}>Next</button>

        </div>
    )
};

export default Paginado;