// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true } ,
        { "titulo": "Padre Rico, Padre Pobre", "autor": "Robert Kiyosaki y Sharon Lechter", "genero": "Finanzas Personales", "disponible": true } ,
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Simulamos leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para simular la escritura de datos (asimilar la escritura en un archivo JSON)
function escribirDatos(nuevaBiblioteca, callback) {
    setTimeout(() => {
        // Simulamos que guardamos la nueva data
        biblioteca = nuevaBiblioteca;
        callback();
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        console.log('--------------------------------');
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    leerDatos((datos) => {
        const nuevoLibro = { titulo, autor, genero, disponible };
        datos.libros.push(nuevoLibro);
        escribirDatos(datos, () => {
            console.log(`Libro "${titulo}" agregado exitosamente.`);
            mostrarLibros();
        });
    });
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {
        const libro = datos.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            escribirDatos(datos, () => {
                console.log(`Disponibilidad del libro "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'Prestado'}.`);
                mostrarLibros();
            });
        } else {
            console.log(`No se encontró el libro con título "${titulo}".`);
        }
    });
}

// Ejemplo de cómo ejecutar la aplicación 
mostrarLibros();

setTimeout(() => {
    agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
}, 2000);

setTimeout(() => {
    actualizarDisponibilidad("1984", false);
}, 5000);
