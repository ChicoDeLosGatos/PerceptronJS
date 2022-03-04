const p = new Perceptron(3), HOMBRE = 0, MUJER = 1;

let datos = [
    [ 1.70, 56, MUJER ],
    [ 1.72, 63, HOMBRE ],
    [ 1.60, 50, MUJER ],
    [ 1.70, 63, HOMBRE ],
    [ 1.74, 66, HOMBRE ],
    [ 1.58, 55, MUJER ],
    [ 1.83, 80, HOMBRE ],
    [ 1.82, 70, HOMBRE ],
    [ 1.65, 54, MUJER  ],
];

p.train(datos);

let test = [1, 1.62, 90], result = p.predict(test);

console.log(result ? 'MUJER' : 'HOMBRE');
