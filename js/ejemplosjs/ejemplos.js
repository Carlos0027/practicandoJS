/*operadores aritmeticos*/
let operando1 = 3;
let operando2 = 2;
let resultado;

//ctrl + shif + fecha derecha

resultado = operando1 + operando2;
console.log(resultado);

resultado = operando1 - operando2;
console.log(resultado);

resultado = operando1 * operando2;
console.log(resultado);

resultado = operando1 / operando2;
console.log(resultado);

//el modulo se calcula sacando el sobrante de la divicion
resultado = operando1 % operando2;
console.log(resultado);

resultado = operando1 ** operando2;
console.log(resultado);

resultado = operando1++;
console.log(resultado);
console.log(operando1);

resultado = operando2 --;
console.log(resultado);
console.log(operando2);


//operadores de asignacion

let resultado1 = 5;

//+= le aumenta numero o -=le resta numero *=  ---  **= --- /=
resultado1 += 3;
console.log(resultado1);

// operadores de comparacion

console.log(2 > 3);
console.log(2 < 3);
console.log(3 <= 3);
console.log(3 >= 3);
console.log(3 == '3');
console.log(3 === '3');

//!= son diferentes //!== estrictamente diferentes
console.log(3 != 3);
console.log(3 !== 3);

//operadores logicos

let operando01 = true;
let operando02 = false;
// || o or && = and (y)
//&&  = and                  // || = or
//true true = true       |   //true true = true     |
//true false = false     |   //true false = true    |
//false true = false     |   //true true = true     |
//false false = false    |   //false false = false  |
console.log(operando01 && operando02);
console.log(operando01 || operando02);

//Operaciones ternaro

resultado02 = (30=== '30') ? 'si es igual':'no es igual';
console.log(resultado02)


