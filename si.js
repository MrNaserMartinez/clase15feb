class Cola {
    constructor(capacidadMaxima = 10) {
        this.items = [];
        this.capacidadMaxima = capacidadMaxima;
    }

    // Insertar un elemento al final de la cola
    enqueue(elemento) {
        if (this.isFull()) {
            return "La cola está llena";
        }
        this.items.push(elemento);
        return true;
    }

    // Eliminar y devolver el elemento al frente de la cola
    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    // Obtener el elemento al frente sin eliminarlo
    frente() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    // Verificar si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Verificar si la cola está llena
    isFull() {
        return this.items.length >= this.capacidadMaxima;
    }

    // Obtener el tamaño actual de la cola
    size() {
        return this.items.length;
    }

    // Mostrar todos los elementos de la cola
    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola simon
let miCola = new Cola(5); // Creamos una cola con capacidad máxima de 5 elementos

console.log("¿La cola está vacía?", miCola.isEmpty()); // true

miCola.enqueue("cliente 1");
miCola.enqueue("cliente 2");
miCola.enqueue("cliente 3");
miCola.mostrar(); // ["cliente 1", "cliente 2", "cliente 3"]

console.log("Atendiendo:", miCola.dequeue()); // "cliente 1"
console.log("Siguiente en la fila:", miCola.frente()); // "cliente 2"
console.log("Tamaño actual de la cola:", miCola.size()); // 2

miCola.enqueue("cliente 4");
miCola.enqueue("cliente 5");
miCola.enqueue("cliente 6");
console.log("Intentando agregar cliente 6:", miCola.enqueue("cliente 6")); // Debería mostrar "La cola está llena"

miCola.mostrar(); // ["cliente 2", "cliente 3", "cliente 4", "cliente 5"]
console.log("¿La cola está llena?", miCola.isFull()); // true