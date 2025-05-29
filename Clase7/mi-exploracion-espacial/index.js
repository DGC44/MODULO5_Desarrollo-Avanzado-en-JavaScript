const planetas = require('./planetas');

function imprimirPlanetas(seccion, listaPlanetas) {
  console.log(`\n=== Planetas ${seccion.toUpperCase()} ===\n`);
  listaPlanetas.forEach(planeta => {
    console.log(`Nombre: ${planeta.nombre}`);
    console.log(`Descripción: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    console.log(`Coordenadas: ${planeta.coordenadas}`);
    console.log(`Imagen: ${planeta.imagen}`);
    console.log('---');
  });
}

imprimirPlanetas('Interiores', planetas.interiores);
imprimirPlanetas('Exteriores', planetas.exteriores);
imprimirPlanetas('Enanos', planetas.enanos);
