const enlinea = (array) => {
    let newArr = [];

    array.map(element=>{newArr.push(Object.values(element))});

    const temperamentos = newArr.flat().join(", ");

    return temperamentos;
};

module.exports = enlinea;