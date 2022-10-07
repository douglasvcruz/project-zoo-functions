const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste de parâmetro inválido', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Teste de função vazia, se é undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Teste de key inexistente', () => {
    expect(handlerElephants('test')).toBeNull();
  });

  it('Teste de key existente', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('Teste de número de residentes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Teste de nomes dos residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Teste da média de idade dos residentes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
