const { sumar } = require('./calculadora');
const { restar } = require('./calculadora');
const { multiplicar } = require('./calculadora');
const { dividir } = require('./calculadora');

describe('Pruebas en el componente calculadora', () => {

    test('Prueba en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
    });
    test('Prueba en la funcion restar', () => {
        expect(restar(10, 5)).toBe(5);
    });
    test('Prueba en la funcion multiplicar', () => {
        expect(multiplicar(5, 5)).toBe(25);
    });
    test('Prueba en la funcion dividir', () => {
        expect(dividir(10, 2)).toBe(5);
    });

});