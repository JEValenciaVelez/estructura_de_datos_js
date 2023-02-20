
/*
En este desafío tendrás que crear tu propia implementación del método shift.

Contrario al reto anterior, aquí tendrás que hacer tu propio método shift para borrar el primer elemento 
que exista en tu array y retornar el elemento eliminado (no olvides modificar la longitud).

En caso de ser un array vacío, este método deberá devolver undefined.

Tu implementación debería tener un input y output como los siguientes:

Input

const myArray = new BetterArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift()
*/

import {MyArray}  from "./ejercicio_1"

class BetterArray extends MyArray {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift(){
    if (!this.data) return undefined; //si  no hay data retorna undefined
    let item = this.data[0];  //guardo el primer elemento del array
    const newList = {}; // instancio objeto vacio
    for (let i = 0; i < this.length - 1; i++){  //genero una iteracion menos del arreglo original 
      newList[i] = this.data[i + 1]; //lleno el arreglo con los items siguientes al primero
    }
    this.length--;  //decremento en uno la longitud del objeto
    this.data = newList; //reasigno la nueva lista al objeto
    return item; //retorno el primer item del objeto original
    
  }
}

const myArray = new BetterArray()
console.log(myArray.unshift("Suerte"));
console.log(myArray.unshift("Con el"))
console.log(myArray.unshift("desafio"))
console.log(myArray.unshift("platzinauta"));
console.log(myArray.unshift("Un 🐱 random en el desafío"));

console.log(myArray.shift());