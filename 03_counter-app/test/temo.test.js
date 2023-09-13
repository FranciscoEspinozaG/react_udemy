/* eslint-disable no-undef */
describe('Pruebas en <DemoComponent/>', () => { 
  
    test('Conociendo pruebas', () => {

        //1. inicializacion
        const mensaje1 = 'Hola Mundo';

        //2. estimulo
        const mensaje2 = mensaje1.trim();
        
        //3. observa el comportamiento
        expect(mensaje1).toBe(mensaje2);
        
    })
})