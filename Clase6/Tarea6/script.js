const { z } = window.Zod;

// Definimos el esquema de validación
const registerSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio."),
  email: z.string().email("El correo electrónico no es válido."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
  };

  const errorsContainer = document.getElementById("errors");
  errorsContainer.textContent = ""; // Limpiar errores previos

  try {
    registerSchema.parse(formData); // Validar
    alert("¡Registro exitoso!");
    document.getElementById("registerForm").reset(); // Limpiar formulario
  } catch (error) {
    if (error.errors) {
      errorsContainer.innerHTML = error.errors.map(e => `<p>${e.message}</p>`).join("");
    } else {
      errorsContainer.textContent = "Error desconocido en la validación.";
    }
  }
});
