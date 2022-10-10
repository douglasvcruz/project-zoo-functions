const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Test: should return correct opening hours', () => {
    expect(getOpeningHours()).toEqual({ Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } });
  });
  it('Test: the zoo is open', () => {
    expect(getOpeningHours('Saturday', '10:00-AM')).toBe('The zoo is open');
  });
  it('Test: the zoo is closed - PM', () => {
    expect(getOpeningHours('Saturday', '10:00-PM')).toBe('The zoo is closed');
  });
  it('Test: the zoo is closed - Monday', () => {
    expect(getOpeningHours('Monday', '10:05-PM')).toBe('The zoo is closed');
  });
  it('Error: the hour should represent a number', () => {
    expect(() => getOpeningHours('Monday', 'test')).toThrow(new Error('The hour should represent a number'));
  });
  it('Error: the day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('test', 'test-PM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Error: the minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Friday', '10:69-PM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Error: the hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Friday', '26:00-PM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Error: the abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '26:00-TM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
});
