document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbarLinks = document.getElementById("navbar-links");

  if (menuIcon && navbarLinks) {
    menuIcon.addEventListener("click", function () {
      navbarLinks.classList.toggle("active"); // Alterna a classe "active"
      menuIcon.classList.toggle("open"); // Adiciona animação ao ícone
    });
  }
});
