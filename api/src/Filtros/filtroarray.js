const arrayFiltrada = (arr) => {
    const mapeo = arr.map(elemento => {
        return {
            id: elemento.id,
            imagen: elemento.image.url,
            name: elemento.name,
            altura: elemento.height.metric,
            peso: elemento.weight.metric,
            años_de_vida: elemento.life_span,
            temperamento: elemento.temperament,
            created: false,
        }
    })
    return mapeo;
}

module.exports = arrayFiltrada;