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
    }
  }, 1000);
}

