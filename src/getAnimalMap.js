const data = require('../data/zoo_data');

const { species } = data;
const locals = ['NE', 'NW', 'SE', 'SW'];

function mapSex(options) {
  const obj = {};
  locals.forEach((local) => {
    obj[local] = species
      .filter((specie) => specie.location === local)
      .map((specie) => ({
        [specie.name]: specie.residents
          .filter((animal) => animal.sex === options.sex)
          .map((animal) => animal.name),
      }));
  });
  return obj;
}

function mapSexSort(options) {
  const obj = {};
  locals.forEach((local) => {
    obj[local] = species
      .filter((specie) => specie.location === local)
      .map((specie) => ({
        [specie.name]: specie.residents
          .filter((animal) => animal.sex === options.sex)
          .map((animal) => animal.name)
          .sort(),
      }));
  });
  return obj;
}

function mapSort() {
  const obj = {};
  locals.forEach((local) => {
    obj[local] = species
      .filter((specie) => specie.location === local)
      .map((specie) => ({
        [specie.name]: specie.residents.map((animal) => animal.name).sort(),
      }));
  });
  return obj;
}

function mapFilter(options) {
  const obj = {};
  locals.forEach((local) => {
    obj[local] = species
      .filter((specie) => specie.location === local)
      .map((specie) => ({
        [specie.name]: specie.residents.map((animal) => animal.name),
      }));
  });
  if (options.sorted === true && options.sex !== undefined) {
    return mapSexSort(options);
  }
  if (options.sex) {
    return mapSex(options);
  }
  if (options.sorted === true) {
    return mapSort();
  }
  return obj;
}

function mapAnimal() {
  const obj = {};
  locals.forEach((local) => {
    obj[local] = species
      .filter((specie) => specie.location === local)
      .map(({ name }) => name);
  });
  return obj;
}

function getAnimalMap(options) {
  if (!options || options.includeNames === undefined) {
    return mapAnimal();
  }
  return mapFilter(options);
}

module.exports = getAnimalMap;
