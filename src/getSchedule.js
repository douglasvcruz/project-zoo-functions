const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const days = Object.keys(data.hours);
  const { hours, species } = data;
  const obj = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      obj[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.filter((sp) => sp.availability.includes(day)).map(({ name }) => name) };
    }
  });
  if (days.includes(scheduleTarget)) return { [scheduleTarget]: obj[scheduleTarget] };

  if (species.map((specie) => specie.name).includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return obj;
}

module.exports = getSchedule;
