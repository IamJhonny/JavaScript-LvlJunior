//*Problema 1
//?  BAR L.A
//*Deja solo pasar a los mayores de edad
//*La primera persona que entre despues de las 2 AM, no paga.

/*let free = false;

const validarCliente = (time)=> {
    let edad = prompt("¿How old are you?");
    if(edad >= 18){
        if(time >= 2 && time < 7 && !free){
            alert("Felicidades :), puedes pasar gratis eres la primera persona despues de las 2 AM");
            free = true;
        }else{
            alert(`Son las ${time}:00Hs puedes pasar, pero tienes que pagar la entrada`);
        }
    }else{
        alert("Joven, eres menor de edad por ende no puedes pasar, ¡PONTE A ESTUDIAR!");
    }
}

validarCliente(11);
validarCliente(1.9);
validarCliente(10);
validarCliente(2);
validarCliente(5);*/

//*Problema 2 (ERROR)
//? High School
//*Crear mini-sistema que nos permita registrar los alumnos que esten presentes(P) y ausentes(A) en clase.
//*Pasados los 30 dias mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
//*Se puede tener un máximo de 10% de ausencia por semestre, si se tienen más, aclarar que está reprobado.

/*let cantidad = prompt("¿Cuantos alumnos son?");
let totalAlumnos = [];

for (i = 0; i < cantidad; i++){
    totalAlumnos[i] = [prompt("Nombre del alumno " + (i+1),),0];
}

const tomarAsistencia = (nombre, p)=> {
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        totalAlumnos[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in totalAlumnos){
        tomarAsistencia(totalAlumnos[alumno[0], alumno]);
    }
}

for (alumno in totalAlumnos){
    let resultado = `${totalAlumnos[alumno][0]}:<br>
    ___________Presentes: <b>${totalAlumnos[alumno][1]} </b><br>
    ___________Ausencias: <b>${30 - totalAlumnos[alumno][1]}</b>
    `;

    if (30 - totalAlumnos[alumnos][1] > 18){
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
    }else{
        resultado = "<br><br>"
    }

document.write(resultado);    
} */

//*Problema 3
//? Calculadora - Operaciones Aritmeticas
//* + - * /

/*const sumar = (n1, n2) => {
    return parseInt(n1) + parseInt(n2);
}

const restar = (n1, n2) => {
    return parseInt(n1) - parseInt(n2);
}

const multiplicar = (n1, n2) => {
    return parseInt(n1) * parseInt(n2);
}

const dividir = (n1, n2) => {
    return parseInt(n1) / parseInt(n2);
}

alert("¿Qué operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division");

if (operacion == 1){
    let num1 = prompt("ingresa el primer número a sumar");
    let num2 = prompt("ingresa el segundo número a sumar");
    resultado = sumar(num1, num2);
    alert(`el resultado de la operación es: ${resultado}`);
}

else if (operacion == 2){
    let num1 = prompt("ingresa el primer número a restar");
    let num2 = prompt("ingresa el segundo número a restar");
    resultado = restar(num1, num2);
    alert(`el resultado de la operación es: ${resultado}`);
}

else if (operacion == 3){
    let num1 = prompt("ingresa el primer número a multiplicar");
    let num2 = prompt("ingresa el segundo número a multiplicar");
    resultado = multiplicar(num1, num2);
    alert(`el resultado de la operación es: ${resultado}`);
}

else if (operacion == 4){
    let num1 = prompt("ingresa el primer número a dividir");
    let num2 = prompt("ingresa el segundo número a dividir");
    resultado = dividir(num1, num2);
    alert(`el resultado de la operación es: ${resultado}`);
}

else{
    alert("No se encontro la operación :(");
}*/

//*Problema 4
//? Tienda de celulares
//* Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
//* Cada celular debe tener color, peso, resolución de pantalla, resolución de camara y memoria RAM
//* Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar

/*class celular {
    constructor(modelo, color, peso, tamaño, rdc, ram){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el celular está apagado");
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Marca de Celular: <b>${this.modelo}</b></br>
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria RAM: <b>${this.memoriaRam}</b></br>
        `
    }
}

celular1 = new celular("Samsung Galaxy S23+", "blanco", "196g", "6.6'", "1080x2340", "8GB");
celular2 = new celular("Redmi Note 11", "gris", "120g", "5.3'", "FULL HD", "4GB");
celular3 = new celular("iPhone X", "negro", "166g", "5'", "1080x2340", "6GB");

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()}
`);*/

//?jjjj