

'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
//creo la clase de arbol binario, con sus propiedades,el nodo inicializa con un valor
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
};

//creamos metodo insert
BinarySearchTree.prototype.insert = function (value) {
    if(value < this.value){
        if(this.left){ //hay algo a la izquierda
            return this.left.insert(value);
        }
        else{ // no hay nada
            this.left = new BinarySearchTree(value);
            return value;
        }
    }
    else{
        if(this.right){
            return this.right.insert(value);
        }
        else{
            this.right = new BinarySearchTree(value);
            return value;
        }
    }         
};

BinarySearchTree.prototype.size = function(){
    let counter = 1;
    if(this.left) counter += this.left.size(); // si hay algo a la izquierda, llama de nuevo la funcion para este
    else if(this.right) counter += this.right.size();
    return counter;
};

let arbol = new BinarySearchTree(10);
//console.log(arbol.size());
arbol.insert(5);
arbol.insert(12);
arbol.insert(8);
//console.log(arbol.size());

BinarySearchTree.prototype.contains = function(value){
    if(value === this.value) return true;
    else if(this.left && this.left.contains(value)) return true;//si hay algo a la izquierda , ejecutame la funcion y si da true, retorna true
    else if(this.right && this.right.contains(value)) return true;//si hay algo a la derecha , ejecutame la funcion y si da true, retorna true
    return false;
};

//console.log(arbol.contains(3));
//console.log(arbol.contains(8));

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
    //recibe una funcion callback y el tipo de orden q vamos a utilizar para recorrer
    //in-order => izqu, nodo , derecha (por defecto)
    //post-order => izqu, derech, nodo
    //pre-order => nodo, izqu, derech

    switch(order){
        case "post-order":
            this.left && this.left.depthFirstForEach(cb,order); // si hay algo a la izqu , ejecuta la funcion
            this.right && this.right.depthFirstForEach(cb, order);
            cb(this.value);
            break;

        case "pre-order":
            cb(this.value);
            this.left && this.left.depthFirstForEach(cb, order);
            this.right && this.right.depthFirstForEach(cb, order);
            break;
            
        case "in-order":
            this.left && this.left.depthFirstForEach(cb, order);
            cb(this.value);
            this.right && this.right.depthFirstForEach(cb, order);
            break;    
            
    }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arrayHijos = []){

    this.left && arrayHijos.push(this.left);  // si hay nodo en la izquierda , pushea en el array ese nodo
    this.right && arrayHijos.push(this.right); // si hay nodo en la derecha , pushealo en el array
    cb(this.value); //ejecuta la callback con su valor
    if(arrayHijos.length){ // si tengo algo en el array
        arrayHijos.shift().breadthFirstForEach(cb,arrayHijos); // saco lo que hay en el array recursivamente hasta que no haya nada en el
    }

};