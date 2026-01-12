const BACKEND_URL = "https://huggingface.co/spaces/nextstepaicompany/backend-generador-ia";

function entrarCola() {
  document.getElementById("formulario").style.display = "none";
  document.getElementById("cola").style.display = "block";

  const personas = Math.floor(Math.random() * 5) + 1;
  document.getElementById("mensajeCola").innerText =
    "Hay " + personas + " personas delante de ti";

  let tiempo = 60;
  const intervalo = setInterval(() => {
    tiempo--;
    document.getElementById("tiempo").innerText = tiempo;

    if (tiempo <= 0) {
      clearInterval(intervalo);
      document.getElementById("mensajeCola").innerText =
        "Generando contenido con IA...";

      enviarAlBackend();
    }
  }, 1000);
}

function enviarAlBackend() {
  const data = {
    tipo_negocio: document.getElementById("tipoNegocio").value,
    producto: document.getElementById("producto").value,
    objetivo: document.getElementById("objetivo").value,
    red_social: document.getElementById("red").value,
    tono: document.getElementById("tono").value
  };

  fetch(`${BACKEND_URL}/generar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(respuesta => {
      mostrarResultado(respuesta);
    })
    .catch(error => {
      document.getElementById("mensajeCola").innerText =
        "Error al conectar con el backend";
      console.error(error);
    });
}

function mostrarResultado(data) {
  document.getElementById("cola").innerHTML = `
    <h2>Contenido generado ✅</h2>
    <p><strong>Texto:</strong></p>
    <p>${data.texto}</p>
    <p><strong>Imagen:</strong></p>
    <p>${data.imagen}</p>
  `;
}
