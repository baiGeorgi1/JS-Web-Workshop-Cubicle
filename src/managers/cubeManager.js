const cubes = [];
exports.getAll = () => cubes.slice();

exports.create = (cubeData) => { //or allData as name,description,difficultyLVL,image
    const newCube = {
        id: cubes.length + 1,
        ...cubeData
    };
    cubes.push(newCube);
    return newCube;
}; 