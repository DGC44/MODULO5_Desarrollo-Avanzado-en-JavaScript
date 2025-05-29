const express = require('express');
const planetas = require('./planetas');

const app = express();
const PORT = 3000;

// Servir archivos estáticos (como styles.css) desde la carpeta "public"
app.use(express.static('public'));

app.get('/', (req, res) => {
  let html = `
    <html>
      <head>
        <title>Exploración Espacial - Planetas</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <h1>Exploración Espacial - Registro de Planetas</h1>
  `;

  function crearSeccion(nombre, lista) {
    let seccion = `<div class="categoria"><h2>${nombre}</h2>`;
    lista.forEach(planeta => {
      seccion += `
        <div class="planeta">
          <h3>${planeta.nombre}</h3>
          <img src="${planeta.imagen}" alt="Imagen de ${planeta.nombre}" />
          <p><strong>Descripción:</strong> ${planeta.descripcion}</p>
          <p><strong>Descubierto en:</strong> ${planeta.descubiertoEn}</p>
          <p><strong>Coordenadas:</strong> ${planeta.coordenadas}</p>
        </div>
      `;
    });
    seccion += `</div>`;
    return seccion;
  }

  html += crearSeccion('Planetas Interiores', planetas.interiores);
  html += crearSeccion('Planetas Exteriores', planetas.exteriores);
  html += crearSeccion('Planetas Enanos', planetas.enanos);

  html += `
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
