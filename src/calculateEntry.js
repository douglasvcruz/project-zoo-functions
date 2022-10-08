const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entries = {
    senior: 0,
    adult: 0,
    child: 0,
  };

  entries.senior = entrants.filter((entrant) => entrant.age === 50).length;
  entries.adult = entrants.filter((entrant) => entrant.age === 18).length;
  entries.child = entrants.filter((entrant) => entrant.age === 5).length;

  return entries;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const func = (countEntrants(entrants));
  return func.senior * data.prices.senior + func.adult * data.prices.adult
    + func.child * data.prices.child;
}

module.exports = { calculateEntry, countEntrants };
