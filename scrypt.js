function sum (num1, num2) {
  return num1 + num2;
}

function sub (num1,num2){
  return num1 - num2;
}

function mul(num1,num2) {
  return num1*num2  
}

function div(num1,num2) {
  return num1/num2;
}

let number1
let number2
let operator
let array = []

//BTON IGUAL
const botonigual = document.getElementById("igual")
botonigual.addEventListener("click", () => { 
  console.log(array); 
  console.log("igual")
  let numero = 0
  for (i=0; i< array.length; i ++) {
    console.log(i)
    console.log(array[i]*10**(array.length-1-i))
    numero +=array[i]*10**(array.length-1-i)
    console.log(numero)
  }
  number2 = numero
  array= []
  console.log("FIN IGUAL")
  console.log(number1)
  console.log(number2)
  
})

// BOTON SUM


const botonsum = document.getElementById("sum")
botonsum.addEventListener("click", () => { 
  console.log(array); 
  console.log("sumo")
  let numero = 0
  for (i=0; i< array.length; i ++) {
    console.log(i)
    console.log(array[i]*10**(array.length-1-i))
    numero +=array[i]*10**(array.length-1-i)
    console.log(numero)
  }
  number1 = numero
  array= []
})
console.log(botonsum) // vista de html

//BONTEES DE NUMEROS
const boton1 = document.getElementById("1")
boton1.addEventListener("click", () => { 
  array.push(1)
})
console.log(boton1) // vista de html

const boton2 = document.getElementById("2")
boton2.addEventListener("click", () => { 
  array.push(2)

})
console.log(boton2)

const boton3 = document.getElementById("3");
boton3.addEventListener("click", ()=> {
  array.push(3)
  
})
console.log(boton3);

const boton4 = document.getElementById("4");
console.log(boton4);

const boton5 = document.getElementById("5");
console.log(boton5);

const boton6 = document.getElementById("6");
console.log(boton6);

const boton7 = document.getElementById("7");
console.log(boton7);

const boton8 = document.getElementById("8");
console.log(boton8);

const boton9 = document.getElementById("9");
console.log(boton9);

const boton0 = document.getElementById("0");
console.log(boton0);

// console.log(number1 + " y " + number2)