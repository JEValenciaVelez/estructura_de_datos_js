/*
En este desafío tendrás que crear tu propia implementación del método unshift.
La implementación del método unshift nos debe permitir agregar un elemento al inicio 
de un array y retornar la nueva longitud del array. En caso de no enviar ningún elemento, 
este de igual forma nos retornará la longitud actual.
*/

export class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    
    unshift(item){
      if(!item) return this.length;
      //debo correr los item una pos adelante
      let count = this.length-1; // variable auxiliar
      for(let i = this.length; i >= 0;  i--){
        this.data[i] = this.data[count];
        count --;
      }
      //ahora que corri los items una pos , reasigno el valor de la prop con index 0
      this.data[0] = item;
      //incremento en uno la longitud, porque aumente en uno la pos y agruege nuevo item
      this.length += 1;

      return this.length;

    }
  }

const myArray = new MyArray();  

console.log(myArray.unshift("!!!"))
console.log(myArray.unshift("Platzinauta"))
console.log(myArray.unshift("lograste"))
console.log(myArray.unshift("lo"))


