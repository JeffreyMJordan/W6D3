const Router = require("./router");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let content = document.querySelector('.content')
  let router = new Router(content)
  router.start();
  let listEls = document.querySelectorAll(".sidebar-nav li");
  listEls.forEach(el => {
    el.addEventListener('click', (event) => {
      let locale = el.innerText.toLowerCase();
      window.location.hash = locale;
    })
  })
});