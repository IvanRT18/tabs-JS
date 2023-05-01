const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //Quitar el activo de todos los botones
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      //Mostrar el que se clickeo
      e.target.classList.add("active");
    });
    //Quitar todos los articulos
    articles.forEach(function (article) {
      article.classList.remove("active");
      //Mostrar el que se clickeo
      const activeElement = document.getElementById(id);
      activeElement.classList.add("active");
    });
  }
});
