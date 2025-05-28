document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Obtener valores
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validaciones adicionales
  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!nombreRegex.test(nombre)) {
    alert('El nombre solo debe contener letras y espacios.');
    return;
  }

  const telefonoRegex = /^\d{10,}$/;
  if (!telefonoRegex.test(telefono)) {
    alert('El teléfono debe contener al menos 10 dígitos numéricos.');
    return;
  }

  const fechaSeleccionada = new Date(fecha);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0); // Ignorar hora
  if (fechaSeleccionada < hoy) {
    alert('La fecha del evento no puede ser anterior a hoy.');
    return;
  }

  // Validaciones básicas
  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !fecha || !hora) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

   alert('Registro exitoso. ¡Gracias por registrarte!');
});
