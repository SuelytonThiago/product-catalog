const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const logo = document.querySelector("#logo");
const themeButton = document.querySelector("#themeBtn");

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const images = document.querySelector(".images");

let position = 0;
const maxPosition = images.scrollWidth - images.clientWidth;

function changeTheme(component) {
  component.classList.toggle("dark");
}

themeButton.addEventListener("click", () => {
  changeTheme(body);
  changeTheme(navbar);
  changeTheme(logo);
  changeTheme(themeButton);
});

function updateButtons() {
    btnLeft.classList.toggle("btnDisabled",position === 0);
    btnRight.classList.toggle("btnDisabled", position >= maxPosition);
}

btnRight.addEventListener("click", () => {
  if (maxPosition > position) {
    position += 320;
    
    if(position > maxPosition) {
        position = maxPosition
    }

    images.style.transform = `translateX(-${position}px)`;
  }
  
  updateButtons();

});

btnLeft.addEventListener("click", () => {

  if (position >= 0) {
    position -= 320;
    images.style.transform = `translateX(-${position}px)`;
  } 
  updateButtons();
});
