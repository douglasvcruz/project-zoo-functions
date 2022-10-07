const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  if (animal.sex === undefined) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  const residentes = species.find((specie) => specie.name === animal.specie).residents;
  return residentes.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
