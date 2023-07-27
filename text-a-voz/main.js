function leerTexto() {
  let texto = document.getElementById("texto").value;
  if (!texto) {
    return alert("Ingrese datos en capo de texto");
  }

  let speechSyn = new SpeechSynthesisUtterance(texto);
  speechSyn.lang = "es-MX";
  speechSynthesis.speak(speechSyn);
}

function limpiarTexto() {
  document.getElementById("texto").value = "";
}
