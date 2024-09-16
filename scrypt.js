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

let number1 // guarda el numero del operador
let number2
let operator
let array = [] // se guarda el prenumero
let resultado = {}
//BTON IGUAL

const botonigual = document.getElementById("igual")
botonigual.addEventListener("click", () => { 
  //prenumero a numero y guadno
  number2 = Number(array.join(""))
  //borro el prenumero
  array = []
  //agrego el numero al objeto 
  resultado.num2 = number2
  console.log(resultado)
  // ejecuto el metodo y muestro
  console.log(resultado.operation())
  resultado = {}

})
// Boron resta
const botonmin = document.getElementById("min")
botonmin.addEventListener("click", ()=>{
  number1 = Number(array.join(""))
  resultado.num1 = number1
  array = []

  resultado.operation = function (num1,num2) {
    let min = 0
      return min = resultado.num1 - resultado.num2;
    }
  console.log(number1);
  console.log(resultado)

})



// BOTON SUM


const botonsum = document.getElementById("sum")
botonsum.addEventListener("click", ()=> {
  number1 = Number(array.join(""))
  resultado.num1 = number1
  array = []
  
  resultado.operation = function (num1,num2) { 
    let sum = 0
    return sum = resultado.num1  + resultado.num2
    
       
  }

  console.log(number1)
  console.log(resultado)
})
//console.log(botonsum) // vista de html

//BONTEES DE NUMEROS
const boton1 = document.getElementById("1")
boton1.addEventListener("click", () => { 
  array.push(1)
})
//console.log(boton1) // vista de html

const boton2 = document.getElementById("2")
boton2.addEventListener("click", () => { 
  array.push(2)

})
//console.log(boton2)

const boton3 = document.getElementById("3");
boton3.addEventListener("click", ()=> {
  array.push(3)
  
})
// console.log(boton3);

const boton4 = document.getElementById("4");
boton4.addEventListener("click", ()=>{
  array.push(4)
})
// console.log(boton4);


const boton5 = document.getElementById("5");
boton5.addEventListener("clic",()=>{
  array.push(5)
})
// console.log(boton5);


const boton6 = document.getElementById("6");
boton6.addEventListener("click",()=>{
  array.push(6)
})
// console.log(boton6);

const boton7 = document.getElementById("7");
boton7.addEventListener("click",()=>{
  array.push(7)
})
// console.log(boton7);


const boton8 = document.getElementById("8");
boton8.addEventListener("click",()=>{
  array.push(8)
})
// console.log(boton8);

const boton9 = document.getElementById("9");
boton9.addEventListener("Click", ()=>{
  array.push(9);
})
// console.log(boton9);

const boton0 = document.getElementById("0");
boton0.addEventListener("clic",()=>{
  array.push(0);
})
// console.log(boton0);


// console.log(number1 + " y " + number2)