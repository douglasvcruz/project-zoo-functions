const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = () => employees.map((employ) => ({
  id: employ.id,
  fullName: `${employ.firstName} ${employ.lastName}`,
  species: species.filter(({ id }) => employ.responsibleFor.includes(id)).map((i) => i.name),
  locations: species.filter(({ id }) => employ.responsibleFor.includes(id)).map((i) => i.location),
}));

const getSpeciesId = (param) => {
  const all = employees.find(({ id }) => id === param.id);

  return {
    id: param.id,
    fullName: `${all.firstName} ${all.lastName}`,
    species: species.filter(({ id }) => all.responsibleFor.includes(id)).map((i) => i.name),
    locations: species.filter(({ id }) => all.responsibleFor.includes(id)).map((i) => i.location),
  };
};

const getSpeciesName = (param) => {
  const utilize = employees.find((employee) =>
    employee.lastName === param.name || employee.firstName === param.name);
  const responsible = employees.find((employee) =>
    employee.lastName === param.name || employee.firstName === param.name).responsibleFor;

  return {
    id: utilize.id,
    fullName: `${utilize.firstName} ${utilize.lastName}`,
    species: species.filter(({ id }) => responsible.includes(id)).map((i) => i.name),
    locations: species.filter(({ id }) => responsible.includes(id)).map((i) => i.location),
  };
};

const getEmployeesCoverage = (param) => {
  if (param === undefined || param === null) {
    return getSpecies();
  }
  if (employees.find(({ id }) => id === param.id)) {
    return getSpeciesId(param);
  }
  if (employees.find(({ lastName, firstName }) =>
    firstName === param.name || lastName === param.name)) {
    return getSpeciesName(param);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
