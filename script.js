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
      textElement.innerHTML += text[line].charAt(i); // Adiciona o próximo caractere
      i++;
      setTimeout(typeText, 100); // Intervalo entre cada caractere
    } else if (line < text.length - 1) {
      line++;
      i = 0;
      textElement.innerHTML += "<br>"; // Quebra de linha entre as frases
      setTimeout(typeText, 500); // Pausa antes de começar a próxima linha
    } else {
      setTimeout(() => {
        textElement.innerHTML = ""; // Limpa o texto
        line = 0; // Reinicia a animação
        i = 0;
        setTimeout(typeText, 500); // Recomeça a animação após um intervalo
      }, 2000); // Pausa antes de reiniciar
    }
  }

  // Iniciar animação assim que a página carregar
  typeText();
});