const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const filterEmployee = employees.filter((employee) => id.includes(employee.id));
  const mapEmployee = filterEmployee.map((employee) => employee.responsibleFor[0]);

  const findSpecie = species.find((specie) => mapEmployee.includes(specie.id)).residents;
  const maior = findSpecie.reduce((ante, atual) => ((ante.age > atual.age) ? ante : atual));

  return [maior.name, maior.sex, maior.age];
}

module.exports = getOldestFromFirstSpecies;
