document.addEventListener("DOMContentLoaded", function () {
  // Animação de digitação
  const textElement = document.getElementById("typing");
  const text = [
    "Desenvolvedor Full Stack em formação",
    "Apaixonado por Tecnologia",
    "Sempre aprendendo novas tecnologias",
  ];
  let i = 0;
  let line = 0;

  function typeText() {
    if (i < text[line].length) {
      textElement.innerHTML += text[line].charAt(i);
      i++;
      setTimeout(typeText, 100);
    } else if (line < text.length - 1) {
      line++;
      i = 0;
      textElement.innerHTML += "<br>"; // Quebra de linha entre as frases
      setTimeout(typeText, 500); // Pequena pausa antes de começar a próxima linha
    } else {
      setTimeout(() => {
        textElement.innerHTML = ""; // Limpar o texto
        line = 0; // Reiniciar a animação
        i = 0;
        setTimeout(typeText, 500); // Recomeçar a animação após um intervalo
      }, 2000); // Pausa antes de reiniciar
    }
  }

  // Iniciar animação assim que a página carregar
  typeText();
});
