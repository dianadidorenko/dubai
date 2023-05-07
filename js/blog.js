// Burger menu

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button");
  let links = menu.find(".burger-menu__link");
  let overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");
    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}
burgerMenu(".burger-menu");

// Header Button Form

let headerForm = document.getElementById("header-form"),
  headerFormToggle = document.getElementById("header-button"),
  headerFormClose = document.querySelector(".close");
page = document.querySelector(".b-page");
footer = document.querySelector(".footer");
copy = document.querySelector(".copy");

headerFormToggle.onclick = function () {
  headerForm.style.display = "flex";
  page.style.display = "none";
  footer.style.display = "none";
  copy.style.display = "none";
};
headerFormClose.onclick = function () {
  headerForm.style.display = "none";
  page.style.display = "block";
  footer.style.display = "block";
  copy.style.display = "block";
};
