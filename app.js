// For Making Header Responsive
const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const drawer = menu.querySelector(".drawer");
const blank = menu.querySelector(".blank");
const close = () => {
  menu.classList.remove("blur");
  drawer.classList.remove("drawer-visible");
};

menu_btn.addEventListener("click", (e) => {
  menu.classList.add("blur");
  drawer.classList.add("drawer-visible");
});

close_btn.addEventListener("click", (e) => {
  close();
});

blank.addEventListener("click", (e) => {
  close();
});

Array.from(drawer.querySelectorAll("a")).forEach((element) => {
  element.addEventListener("click", () => {
    close();
  });
});

  
  
  