
/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una 
    lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser 
    un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
    en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

//implento la clase LinkedList
function LinkedList(){
    this.head = null;
};

//implemento la clase nodo
function Node(value){
    this.value = value;
    this.next = null;
};

LinkedList.prototype.add = function(value){
    const newNodo = new Node(value);
    let current = this.head; //variable auxiliar que mira al nodo
    if(!current){  // si no hay nada en current, es decir si su valor es null
        this.head = newNodo; // guardo el nuevo nodo en la prop head 
        return value;  // pongo return para salirme de la funcion y terminar la tares
    }
    while(current.next){ //mientras halla valor en la prop next del nodo
        current = current.next; //asi soy next cada vez hasta llegar a un next no tenga valor
    }
    current.next = newNodo; //guardo el nuevo nodo en next que era null.
    return value;     // retorno el valor ingresado por parametro para terminar la funcion
    
};

LinkedList.prototype.remove = function(){
    let current = this.head;
    if(!current) return null; //si no hay nada en current, retorno null
    if(!current.next){   // si no hay nada en la prop next de current(solo hay un nodo)
        this.head = null; // borro el nodo , asignandole null
        return current.value;  //retorno el valor de la prop value para salirme de la funcion.
    }
    while(current.next.next !== null){ //si el valor de next del nodo siguiente al siguiente es null
        current = current.next;  // asigname el penultimo nodo
    }
    let currentBorrado = current.next;   //antes de borrarlo lo guardo
    current.next = null;   // a la prop next del penultimo nodo le asigno null. asi elimino el ultimo
    return currentBorrado;  // devuelbo el nodo que guarde antes de borrarlo
    
}

LinkedList.prototype.search = function(value){
    let current = this.head;
    if(!current) return null;
    while(current){  // mientras que halla nodo
        if(typeof value === 'function'){  //valido si el value es una funcion
            if(value(current.value)) return current.value; //si la funcion retorna valor, devuelvo el valor.
        }
        if(current.value === value) return value;
        current = current.next;
    }
    if(current.value === value) return value;
    return null;
};

const myList = new LinkedList();
//myList.add(5);
//console.log(myList);
myList.add('one');
myList.add('two');
myList.add('tree');
myList.add('four');
console.log(myList);
//console.log(myList.remove());
console.log(myList.search('four'));

