
/*
construir clase arrya con metodos push(),get(),
*/


function myArray(){     //construllo clase myArray
    this.length = 0;    //creo propiedad lenght ynla inicializo en cero porque en un principio el array es vacio
    this.data = {};     //le creo propiedad data como un objeto vacio
}

myArray.prototype.get = function(index){//este metodo va tomar un indice que es el numero del elemento que necesio q me regrese
    return this.data[index];
}; 

myArray.prototype.push = function(item){
    this.data[this.length] = item;
    this.length += 1;
    return this.data;
};

/* MI SOLUCION
myArray.prototype.pop = function(){
    const newArray = {};  //creo objeto vacio para llenar con nueva lista.
    if(this.length === 0) return this.data; // valido que tenga elementos el objeto en el que estamos
    for(let i=0; i<this.length-1; i++){  //creo bucle para recorrer el objeto con una iteracion menos de su longitud
        newArray[i] = this.data[i];     //meto en la lista nueva los items recorridos , menos el ultimo
    }
    this.data = newArray;  //apenas este completa la nueva lista la reasigno a la lista del objeto
    this.length --;        // decremento en uno la longitud de la lista de este objeto porque decrecio en uno
    return this.data;      // devuelvo la lista de este objeto de clase myArray
};
*/

//SOLUCION DEL PROFE

myArray.prototype.pop = function(){
    const myItem = this.data[this.length-1]; // guardo el ultimo elemento de la lista del objeto
    delete this.data[this.length-1] //borro el utlimo elemento de la lista del objeto de clase myArray
    this.length--;  // disminuir en uno la longitud del objeto
    return myItem;
};

//crear metodo que elimine items por indice
//primero creo un metodo renueva el item del index ingresado y corra los itmes de posicion
myArray.prototype.shiftIndex = function(index){
    //lo primero es disminuir de pos los items desde el index ingresado
    for(let i = index; i < this.length-1; i++){
        this.data[i] = this.data[i+1]; //al iteme de la pos anterior le asigno el de adelante
    }
    //ahora el item que estaba antes en el index ingreasado se movio al ultimo lugar
    delete this.data[this.length-1]; //elimino el item del ultimo lugar
    this.length--; // le resto uno a la longitud del objeto
};

myArray.prototype.delete = function(index){
    const item = this.data[index];
    this.shiftIndex(index)
    return item;
}


const array = new myArray();

array.push('juan');
array.push('julian');

console.log(array);

console.log(array.delete(0));

console.log(array);


