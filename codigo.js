//YouTube Soy Dalto
//? Variable
/*let nombre = prompt("Write your name here:");

document.write("Welcome to the company " + nombre);*/

//? Operadores
//var numero = 50;

//numero += 5;
//numero -= 17;
//numero /= 10;
//numero %= 8;
//numero **= 2;

//console.log(numero);

//? Arrays & concatenación
/*let name = "Jhonny manuel de los santos";
let altura = 169;
let nacionalidad = "Dominicano";
let edad = 22;

frase= `<h2> Soy la caja de datos</h1>
             Mi nombre es: <b>${name}</b> <br>
             Mido: ${altura} cm <br>
             Tengo ${edad} de edad <br>
             Mi nacionalidad es: ${nacionalidad}
    `;

document.write(frase);*/

//? Operadores relacionales y aritmeticos
//let n1 = 23, n2 = 03, t1 = "23", t2 = "engineer";

//console.log(n1 == n2); //*(== es  igual) false
//console.log(n1 != t1); //*(!= es diferente) false
//console.log(n1 === t1); //*(=== estrictamente igual) false
//console.log(n1 >= n2); //*(mayor o igual) true

//afirmacion1 = t1 == t2;
//afirmacion2 = n2 < n1;

//console.log(afirmacion1 && afirmacion2); //*AND ambas deber ser true
//console.log(afirmacion1 || afirmacion2); //*OR unas de las dos true
//console.log(!true); //*NOT la convierte a lo contrario

//? Bucles e iteración
/*let num1 = 0;

while(num1 < 50){
    num1 ++;
    document.write(num1 + "<br>");

    if(num1 == 22){
        break;
    }
}*/

/*do{
    document.write(num1 + "<br>");
    num1 ++;
}

while(num1 < 9);*/ //ejecuta y luego ve que se cumpla

//*1.Declaramos la variable 2.add la condición 3.In-De cremento 
/*for (let i = 0; i < 10; i++){

    if(i == 3){
        document.write("Today is your HBD :D" + "<br>");
        continue;
    }

    document.write("Day " + i + "<br>");
}*/

//? Funciones & Parametros
/*function saludar(usuario){
    //usuario = "Jhonny";
    respuesta = prompt(`¡Hola ${usuario}! ¿Qué tal tu día?`);
    
    if(respuesta == "bien"){
        alert(`¡Me alegra mucho ${usuario}! :D`);
    }
    else if(respuesta == "excelente"){
        alert(`¡Me alegra mucho ${usuario}! :)`);
    }
    else{
        alert("¡Ah, que mal! :(");
    }
} 
saludar("Jhonny");*/

/*let sumar = function(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}
sumar(55,67.58);
sumar(1,1);*/

/*const genero = (sexo)=> {
    let sex = `Tu sexo es: ${sexo}`;
    document.write(sex);
}
genero("<b> Masculino </b>");*/

//TODO PROGRAMACIÓN ORIENTADA A OBJETOS P.O.O
//*es un paradigma de programación que se basa en la idea de modelar el mundo real como una colección de objetos que interactúan entre sí. 

/*class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años de edad, y 
        soy de color ${this.color}.`;
    }

    verInfo(){
        document.write(this.info + "<br>");
    }
}*/

/*class dog extends animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }

    ladrar(){
        alert("¡WaW WaW!");
    }

    set setColor(newColor){
        this.color = newColor;
    }

    get getColor(){
        return this.color;
    }

}*/

//const perro = new dog ("perro", 3, "negro", "pastorAleman");
//const gato = new animal ("gato", 7, "blanco");
//const pajaro = new animal ("pajaro", 2, "verde");

//* forma larga de ver la info por consola si no creas una función
// console.log(perro.info + "<br>");
// console.log(gato.info + "<br>");
// console.log(pajaro.info + "<br>");

//* forma corta de ver la info si creas la función
//perro.ladrar();
//perro.setColor = "marrón";
//document.write(perro.getColor);
//gato.verInfo();
//pajaro.verInfo();


//? Metodos de Cadenas
//let cadena = new String ("¡Hello, Good Morning Sr!");
//let bienvenida = "SALUDOS ";
//let n1 = 50;

//let concatenacion = cadena.concat(" Welcome to the Jhonny Company"); //* combina dos o más cadenas
//let buscar = cadena.includes("Morning"); //* true o false si el texto se encuentra dentro del string
//let repetir = bienvenida.repeat(3); //* devuelve la misma cadena repetida las veces que indiquemos
//let separar = cadena.split(" "); //* divide la cadena como le pidamos.. los convierte en arrays 
//console.log(separar[2]); //* Morning
//let string = bienvenida.substring(3,6); //*UDO //nos retorna un pedazo de la cadena que indiquemos 
//let minuscula = bienvenida.toLowerCase(); //* convierte una cadena a minúscula
//let mayuscula = cadena.toUpperCase(); //* convierte una cadena a mayúscula
//let convertir = n1.toString(); //* convierte un num a string

//console.log(cadena.length);

//? Métodos Arrays
//let familia = ["dionis", "maria", "jhonny", "adonis", "adolfo"];
//let numeros = [1, 28, 3, 49, 57, 5, 2, 111];

//! Transformadores
//let lastElement = familia.pop(); //* elimina el último elemento de un array y lo devuelve.
//let firstElement = familia.shift(); //* elimina el primer elemento de un array y lo devuelve.
//let addElementEnd = familia.push("anderson", "rambo"); //* agrega uno o más elementos al array al final de la lista.
//let addElementBegin = familia.unshift("Nelli", "Diego"); //* agrega uno o más elementos al array al principio.
//let inverso = numeros.reverse(); //* invierte el orden de los elementos de un array.
//let ordenar = numeros.sort(); //* ordena los elementos de un array.
//let dobleFilo = familia.splice(2,1,"john wick"); //* "jhonny" = "john wick" //elimina y/o agrega nuevos elementos a un array.

//! Accesores
//let separar = familia.join("<br> miembro: "); //* nos separa la cadena con los elementos que queramos.

//! De repetición
//let resultado = familia.filter(fam => fam.length > 5); //* crea un nuevo array con todos los elementos que cumplan la condición.

//document.write(resultado);
//console.log(numeros);
//console.log(familia);
//document.write("miembro: " + unirse);


//TODO Objeto Match - Básico
//! Métodos
//let raizCuadrada = Math.sqrt(100); //* 10 // Devuelve la raíz cuadrada de un número.
//let raizCubica = Math.cbrt(100); //* 4.641... // Devuelve la raíz cúbica de un número.
//let maximo = Math.max(44, 5, 1, 3, 99, 500, 67, 89); //* 500 // Devuelve el número mayor de todos los que pasemos.
//let minimo = Math.min(44, 5, 1, 3, 99, 500, 67, 89); //* 1 // Devuelve el número menor de todos los que pasemos.
//let aleatorio = Math.random()*100; //* Devuelve un número pseudo-aleatorio entre 0 y 1. 
//let n1 = Math.round(aleatorio); //* Devuelve el valor de un número redondeado al número entero más sercano.
//let n2 = Math.floor(3.9999) //* 3 // Devuelve el número redondeado hacía atrás.
//let n3 = Math.trunc(10.99); //*10 // Devuelve el numero antes del punto.. elimina los decimales
//let radio = Math.PI; //* 3.14 //radio de la circunferencia de un circulo

//console.log(radio);





